import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewloanComponent } from './core/components/viewloan/viewloan.component';
import { CreateloanComponent } from './core/components/createloan/createloan.component';

const routes: Routes = [
  { path: 'admin/loans', component: ViewloanComponent },
  { path: 'admin/loans/create', component: CreateloanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
