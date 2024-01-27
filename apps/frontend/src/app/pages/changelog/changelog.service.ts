import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class ChangelogService {
  constructor(private http: HttpClient) {}

  public getChangelogContent(): Observable<string> {
    const headers = new HttpHeaders();
    headers.append('Access', 'text/markdown');
    headers.append('Content-Type', 'text/markdown');

    const request = this.http.get<ArrayBuffer>('/api/changelog', {
      headers,
      responseType: 'arraybuffer' as 'json',
    });

    return request.pipe(map(this.getContentFromArrayBuffer));
  }

  private getContentFromArrayBuffer = (arrbuffer: ArrayBuffer): string =>
    new TextDecoder().decode(arrbuffer);
}
