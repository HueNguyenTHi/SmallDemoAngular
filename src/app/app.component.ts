import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';



interface User {
  id?: number;
  name?: string;
  address?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {label: 'Stuff', routerLink: ['/stuff']},
      {label: 'Form', routerLink: ['/form']},
      {label: 'Observable', routerLink: ['/ober']},
      {label: 'Animation', routerLink: ['/animation']}
  ];
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
