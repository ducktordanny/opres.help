import {AfterViewInit, ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {TspTreeData} from '@opres/shared/types';
import * as d3 from 'd3';
import {HierarchyPointLink} from 'd3';

@Component({
  selector: 'opres-tsp-tree[treeId][data]',
  templateUrl: './tree.template.html',
  styleUrls: ['./tree.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent implements AfterViewInit {
  @Input() public treeId!: string;
  @Input() public circleRadius = 16;
  private height!: number;
  private width!: number;
  private _data!: Array<TspTreeData>;
  private tree!: d3.Selection<SVGGElement, unknown, HTMLElement, unknown>;
  private information!: d3.HierarchyPointNode<unknown>;

  @Input() public set data(value: Array<TspTreeData>) {
    const starterNodeId = value[0].id;
    const maxDepth = value.filter((node) => node.parentId === starterNodeId).length + 1;
    this.height = maxDepth * 100;
    this.width = maxDepth * 150;
    this._data = value;
  }

  public ngAfterViewInit(): void {
    this.initSVG();
    this.convertDataIntoD3Information();
    this.drawConnections();
    this.drawNodes();
  }

  private initSVG(): void {
    this.tree = d3
      .select(`div#${this.treeId}`)
      .append('svg')
      .attr('height', this.height)
      .attr('width', this.width)
      .append('g')
      .attr('transform', 'translate(0, 25)');
  }

  private convertDataIntoD3Information(): void {
    const dataStructure = d3
      .stratify()
      .id((data) => (<TspTreeData>data).id)
      .parentId((data) => (<TspTreeData>data).parentId)(this._data);
    const treeStructure = d3.tree().size([this.width - 50, this.height - 50]);
    this.information = treeStructure(dataStructure);
  }

  private drawConnections(): void {
    const connections = this.tree
      .append('g')
      .selectAll('path')
      .data(this.information.links())
      .enter()
      .append('g');

    connections.append('path').attr('d', this.path);

    connections
      .append('text')
      .text((data) => {
        const {townId} = <TspTreeData>data.target.data || {};
        return townId === undefined ? '' : (townId + 1).toString();
      })
      .attr('x', (data) => (data.target.x + data.source.x) / 2 + 10)
      .attr('y', (data) => (data.target.y + data.source.y) / 2 + 5)
      .attr('class', 'cost');
  }

  private drawNodes(): void {
    const nodes = this.tree
      .append('g')
      .selectAll('circle')
      .data(this.information.descendants())
      .enter()
      .append('g');

    nodes
      .append('circle')
      .attr('cx', (data) => data.x)
      .attr('cy', (data) => data.y)
      .attr('r', this.circleRadius);

    nodes
      .append('text')
      .text((data) => (<TspTreeData>data.data)?.displayId ?? 'x')
      .attr('x', (data) => data.x)
      .attr('y', (data) => data.y + 5)
      .attr('text-anchor', 'middle');

    nodes
      .append('text')
      .text((data) => (<TspTreeData>data.data)?.cost ?? '')
      .attr('x', (data) => data.x + 25)
      .attr('y', (data) => data.y + 5);
  }

  private path = (d: HierarchyPointLink<unknown>): string => {
    const xSource = d.source.x;
    const ySource = d.source.y;
    const xTarget = d.target.x;
    const yTarget = d.target.y;
    const controlPoint = (ySource + yTarget) / 2;

    return `M${xSource} ${ySource} C ${xSource} ${controlPoint}, ${xTarget} ${controlPoint}, ${xTarget} ${yTarget}`;
  };
}
