import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AppStateFacadeService {

  constructor(private store:Store<any>) { }
}
