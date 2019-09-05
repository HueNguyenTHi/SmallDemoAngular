import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('firstAnima',
      [
        state('smaller', style({ 'background-color': 'red', transform: 'translateX(0)' })),
        state('larger', style({ 'background-color': 'blue', transform: 'translateX(100px)' })),
        transition('smaller => larger', animate(300)),
        transition('larger => smaller', animate(800))
      ]
    ),
    trigger('wildAnima',
      [
        state('smaller', style({ 'background-color': 'red', transform: 'translateX(0) scale(1)' })),
        state('larger', style({ 'background-color': 'blue', transform: 'translateX(100px) scale(1)' })),
        state('shrunker', style({ 'background-color': 'green', transform: 'translateX(0px) scale(0.5)' })),
        transition('smaller => larger', animate(300)),
        transition('larger => smaller', animate(800)),
        transition('larger => smaller', animate(800)),
        transition('shrunker <=> *', [
          style({'background-color': 'orange'}),
          animate(1000, style({borderRadius: '50px'})),
          animate(500)
        ])
      ]
    ),
    trigger('list1',
    [
      state('in', style({ opacity: 1, transform: 'translateX(0)px' })),
      transition('void => *', [style({opacity: 0, transform: 'translateX(-100px)'}), animate(300)]),
      transition('* => void', [animate(300), style({opacity: 0, transform: 'translateX(100px)'})])
    ]
  ),
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  state: string = "smaller";
  wildState: string = "smaller";
  list= ['Milk', 'Sugar', 'Bread'];
  onAnimate() {
    this.state = this.state == 'larger' ? 'smaller' : 'larger';
    this.wildState = this.wildState == 'larger' ? 'smaller' : 'larger';
  }

  onShrunker() {
    this.wildState = 'shrunker';
  }

  onAdd(item: string){
    this.list.push(item);
  }

  onDelete(inputItem:string){
    this.list = this.list.filter(item => { return item != inputItem});
  }

}
