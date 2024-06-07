import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
