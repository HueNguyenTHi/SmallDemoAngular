import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { TestForlazyLoadComponent } from './test-forlazy-load/test-forlazy-load.component';
import { AttributeDirective } from '../custom/directive/attribute.directive';

interface User {
  id?: number;
  name?: string;
  address?: string;
}

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.scss']
})
export class StuffComponent implements AfterViewInit   {
  
  //Use @ViewChild for directive
  @ViewChild(AttributeDirective, {static: true})
  set attribute(attributeDirectiveValue: AttributeDirective){
    console.log('Value get from AttributeDirective: ' + attributeDirectiveValue.testValueForViewDirective);
    
  }

  //Use @ViewChild for child component
  @ViewChild(TestForlazyLoadComponent, {static: true}) 
  lazyLoadComponent: TestForlazyLoadComponent;

  constructor() { }

  ngOnInit() {
   
    
  }

  ngAfterViewInit() {
    console.log('Value get from child component: ' + this.lazyLoadComponent.testValueForViewChildComponent);
  }

  title = 'custom-directive';
  textForTestPipe = '';
  userList: User[] = [];
  searchText = '';
  //for binding data
  amount: number = 1000;
  withdrawValue: number;

  public genRandomUserList(){
    
    for (let i = 1; i < 6; i++){
      let user: User= {};
      user.id = i;
      user.name = 'User' + i;
      user.address = 'Address' + i;
      this.userList.push(user);
    }
    
  }

}
