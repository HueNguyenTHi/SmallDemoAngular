import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ObservableComponent } from './observable/observable.component';
import { AnimationComponent } from './animation/animation.component';


const routes: Routes = [
  {path: '', redirectTo: 'stuff', pathMatch: 'full'},
  {path: 'stuff', loadChildren: './stuff/stuff.module#StuffModule'},
  // {
  //   path: 'stuff',
  //   component: StuffComponent,
  //   children: [
  //     {
  //       path: 'test',
  //       component: TestForlazyLoadComponent
  //     }
  //   ]
  // },
  {path: 'form', component: FormComponent},
  {path: 'ober', component: ObservableComponent},
  {path: 'animation', component: AnimationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
