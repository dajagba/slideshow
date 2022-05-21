import { SlideShowEffects } from './store/effects/slideshow.effects';
import { appReducers } from './store/reducers/app.reducer';
import { SlideshowComponent } from './component/slideshow/slideshow.component'
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, SlideshowComponent],
  imports: [BrowserModule,  HttpClientModule,
    StoreModule.forRoot(appReducers),EffectsModule.forRoot([SlideShowEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
