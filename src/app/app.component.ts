import { GetInitialSlideShowData } from './store/actions/slideshow.action';
import { IAppState } from './store/state/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{

  constructor(private store: Store<IAppState>){}
  ngOnInit(){
    this.store.dispatch(GetInitialSlideShowData());
  }
}
