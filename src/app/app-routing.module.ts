import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/private/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./views/public/not-found/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
