import { SlideShowEffects } from './store/effects/slideshow.effects';
import { appReducers } from './store/reducers/app.reducer';
import { SlideshowComponent } from './component/slideshow/slideshow.component'
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

@NgModule({
  declarations: [AppComponent, SlideshowComponent],
  imports: [BrowserModule,  HttpClientModule,
    StoreModule.forRoot(appReducers),EffectsModule.forRoot([SlideShowEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production,  // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
