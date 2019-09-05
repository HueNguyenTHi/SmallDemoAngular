import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirective } from './custom/directive/attribute.directive';
import { NewPipe } from './custom/pipe/new-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './custom/pipe/filter.pipe';
import { ChildComponent } from './child/child/child.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { FormComponent } from './form/form.component';
import { StuffComponent } from './stuff/stuff.component';
import { TestForlazyLoadComponent } from './stuff/test-forlazy-load/test-forlazy-load.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ObservableComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
