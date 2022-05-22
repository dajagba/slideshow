import { IPicture } from './../../model/model';
import { MOCK_INITIAL_DATA } from './../../model/constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of, from } from 'rxjs';
import { catchError, retry, map, switchMap, mergeMap, tap, toArray } from 'rxjs/operators';
import * as uuid from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchMockData(): Observable<IPicture[]>{
    return this.http.get(MOCK_INITIAL_DATA)
    .pipe(
      switchMap((resp:any) => {
        return of(resp?.data?.children)
      }),
      mergeMap(val => from(val).pipe(
        map((item:any)=>{
          let picture: IPicture = {
            id: uuid.v4(),
            title: item?.data?.title,
            url: item?.data?.preview?.images[0]?.resolutions[2]?.url
          }
          return picture
        })
      )),
      toArray(),
      retry(3),
      catchError((err) => {return this.handleError(err)}))
  }
  private handleError(error: HttpErrorResponse){
    console.log("error: " + error.message);
    return throwError(() => new Error(`There was a Network Issue`));
  }
}
