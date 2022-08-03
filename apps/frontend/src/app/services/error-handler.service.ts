import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {EMPTY, Observable} from 'rxjs';

import {APIError} from '../types/api.type';

@Injectable()
export class ErrorHandlerService {
  constructor(private snackbar: MatSnackBar) {}

  public showError = (value: {error: APIError}): Observable<never> => {
    const message =
      value?.error?.message || value?.error?.error || 'Something went wrong';
    this.snackbar.open(message, 'Close');
    return EMPTY;
  };
}
