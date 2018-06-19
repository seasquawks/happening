import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { VenueComponent } from './venue/venue.component';

const routes: Routes = [
  { path: 'venue', component: VenueComponent, data: { title: 'venue' } }
]
@NgModule({
  declarations: [
    AppComponent,
    VenueComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
