import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewloanComponent } from './core/components/viewloan/viewloan.component';
import { CreateloanComponent } from './core/components/createloan/createloan.component';
import { EditloanComponent } from './core/components/editloan/editloan.component';

const routes: Routes = [
  { path: 'admin/loans', component: ViewloanComponent },
  { path: 'admin/loans/create', component: CreateloanComponent },
  { path: 'admin/loans/:id', component: EditloanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
