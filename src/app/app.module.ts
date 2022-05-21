import { SlideshowComponent } from './component/slideshow/slideshow.component'
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, SlideshowComponent],
  imports: [BrowserModule,  HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
