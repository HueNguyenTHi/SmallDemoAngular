import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuffComponent } from './stuff.component';
import { StuffRoutingModule } from './stuff-routing.module';
import { AttributeDirective } from '../custom/directive/attribute.directive';
import { NewPipe } from '../custom/pipe/new-pipe.pipe';
import { FilterPipe } from '../custom/pipe/filter.pipe';
import { ChildComponent } from '../child/child/child.component';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { TestForlazyLoadComponent } from './test-forlazy-load/test-forlazy-load.component';




@NgModule({
  declarations: [StuffComponent,
    AttributeDirective,
    NewPipe,
    FilterPipe,
    ChildComponent,
    TestForlazyLoadComponent],    
  imports: [
    CommonModule,
    StuffRoutingModule,
    FormsModule,
    TabMenuModule
  ]
})
export class StuffModule { }
