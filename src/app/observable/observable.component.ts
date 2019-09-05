import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, Observable, of, from, Subscription, observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { SelectItem } from 'primeng/api';
import { map, filter, switchMap, count } from 'rxjs/operators';
import { ObservableService } from './observable.service';
import { User } from './User.interface';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  // ngOnDestroy(): void {
  //   // this.sub2.unsubscribe();
  // }
  colors: SelectItem[];
  selectedColor =  'Yellow';
  inputName: any;
  userList = [];
  displayList: any;
  displayListFromServer: User[] = [];

  constructor(private observableService: ObservableService) {
   }

  ngOnInit() {
    if(this.displayList === undefined){
      this.displayList = [];
    }
    this.getFromServer();
    
    this.colors = [
      {label: 'Yellow', value: 'Yellow'},
      {label: 'White', value: 'White'},
      {label: 'Pink', value: 'Pink'},
      {label: 'Green', value: 'Green'},
      {label: 'Dark', value: 'Dark'},
      {label: 'Gray', value: 'Gray'},
      {label: 'Blue', value: 'Blue'},
  ];
  }

  addNewUser(){
    //using map and filter in observable
    const userTemp = {id: this.displayList.length, name: this.inputName, color: this.selectedColor};
    this.userList = [];
    this.userList.push(userTemp);
    let userObservable = from(this.userList)
    .pipe(map(mapValue => {
      let objectMap = mapValue;
      objectMap.color = mapValue.color + '_color';
      return objectMap;
    }),
    filter(filterValue => filterValue.color != 'Gray_color' ));

    const observe = {
       next:  value => {
      let temOb = value;
      temOb.combine = value.name + '_' + value.color;
      this.displayList.push(temOb);
    }
  };

    userObservable.subscribe(observe);

    // create custom observable and handle error
    const customObservable = Observable.create( observable => {
      let count = 0;
      setInterval(() => {
        observable.next(count);
        if(count >= 3){
          observable.error(new Error('count bigger than 3')); 
        }
        if (count === 5){
          observable.complete();
        }
        count++;
      }, 1000)
    }
    );
    customObservable.subscribe( 
      (data) => {console.log(data);},
      (error) => {console.log('here' + error);},
      () => {console.log('done');
      }
    )
  }

  getFromServer(){
    this.observableService.getUserList().subscribe(
      (res) => {
        this.displayListFromServer=res;
        
        console.log(res);
      }
    );
  }

  addToServer(){
    let newUser = {name: this.inputName, color:this.selectedColor };
    this.observableService.addUser(newUser).subscribe(
      (res) => {
        this.getFromServer();
      }
    );
  }

  delete(userId: number){
    console.log(userId);
    
    this.observableService.deleteUser(userId).subscribe(
      (res) => {
        this.getFromServer();
      }
    );
    
  }



}
