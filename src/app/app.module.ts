import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faChevronRight,
  faFire,
  faPersonFallingBurst,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { AddMarkerModalComponent } from './views/private/add-marker-modal/add-marker-modal.component';

@NgModule({
  declarations: [AppComponent, AddMarkerModalComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFire, faWind, faPersonFallingBurst, faChevronRight);
  }
}
