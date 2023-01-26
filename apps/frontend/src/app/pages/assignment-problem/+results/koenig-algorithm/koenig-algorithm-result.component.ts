import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-koenig-algorithm-result',
  templateUrl: './koenig-algorithm-result.template.html',
  styleUrls: ['../results.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoenigAlgorithmResultComponent {}
