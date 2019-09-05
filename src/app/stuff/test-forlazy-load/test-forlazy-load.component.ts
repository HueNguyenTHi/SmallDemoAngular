import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-forlazy-load',
  templateUrl: './test-forlazy-load.component.html',
  styleUrls: ['./test-forlazy-load.component.scss']
})
export class TestForlazyLoadComponent implements OnInit {
  testValueForViewChildComponent: number;
  constructor() { }

  ngOnInit() {
    this.testValueForViewChildComponent = 10;
  }

}
