import { IPicture } from './../../model/model';
import { MOCK_INITIAL_DATA } from './../../model/constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import * as uuid from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchMockData(): Observable<IPicture[]>{
    return this.http.get(MOCK_INITIAL_DATA)
    .pipe(
      map((resp:IPicture[]) => ({
        ...resp,
        id: uuid.v4()
      })),
      retry(3),
      catchError((err) => {return this.handleError(err)}))
  }
  private handleError(error: HttpErrorResponse){
    return throwError(() => new Error('There was a Network Issue: '+error));
  }
}
