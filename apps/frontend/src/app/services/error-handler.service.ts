import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {TranslateService} from '@ngx-translate/core';
import {EMPTY, Observable} from 'rxjs';

import {APIError} from '../types/api.type';

@Injectable()
export class ErrorHandlerService {
  constructor(private snackbar: MatSnackBar, private translateService: TranslateService) {}

  public showError = (value: {error: APIError}): Observable<never> => {
    const message = value?.error?.message || value?.error?.error || 'Something went wrong';
    const action = this.translateService.instant('CLOSE');
    this.snackbar.open(message, action);
    return EMPTY;
  };
}
