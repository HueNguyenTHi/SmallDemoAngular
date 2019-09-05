import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestForlazyLoadComponent } from './test-forlazy-load/test-forlazy-load.component';
import { StuffComponent } from './stuff.component';


const routes: Routes = [
    { path: '', component: StuffComponent,
    children: [
        {path: 'test', component: TestForlazyLoadComponent}
    ]
},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class StuffRoutingModule { }