import {Component} from '@angular/core';

import {CostTable, TransportProblemService} from './transport-problem.service';

type ResultValue = {table: CostTable; epsilon: number} | null;

@Component({
  selector: 'transport-problem-page',
  templateUrl: './transport-problem.template.html',
  styleUrls: ['./transport-problem.style.scss'],
})
export class TransportProblemComponent {
  resultShouldBe = 0;
  currentResult: ResultValue = null;

  constructor(private transportTableService: TransportProblemService) {}

  test1(): void {
    // TEST 1 (Epsilon should be 458)
    this.transportTableService.fill(
      [15, 43, 28, 19],
      [18, 32, 35, 20],
      [
        [8, 7, 3, 2],
        [1, 4, 2, 5],
        [2, 3, 4, 7],
        [1, 1, 4, 4],
      ],
    );
    this.resultShouldBe = 458;
    console.log('------------------- FILL -------------------');
    this.transportTableService.log();
  }

  test2(): void {
    // TEST 2 (Epsilon should be 125)
    this.transportTableService.fill(
      [12, 18, 7, 13],
      [10, 10, 11, 19],
      [
        [1, 4, 5, 9],
        [7, 5, 2, 3],
        [1, 3, 4, 5],
        [2, 2, 8, 1],
      ],
    );
    this.resultShouldBe = 125;
    console.log('------------------- FILL -------------------');
    this.transportTableService.log();
  }

  calc(): void {
    try {
      if (!this.transportTableService.isFilled()) {
        throw new Error('Table has no values.');
      }
      this.currentResult = this.transportTableService.northWest();
      console.log('------------------- RESULT -------------------');
      console.table(this.currentResult.table);
      console.log('EPSILON', this.currentResult.epsilon);
      console.log(
        `ESILON: ${
          this.resultShouldBe === this.currentResult.epsilon
            ? 'Correct ✅'
            : 'Wrong ❌'
        }`,
      );
    } catch (err: any) {
      console.error(err.message);
    }
  }
}
