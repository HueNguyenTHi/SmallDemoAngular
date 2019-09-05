import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() amountFromParent: number;
  withdrawValue: number;
  @Output() amountAfterChange = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  public onClickToWithDraw() {
    this.amountFromParent = this.amountFromParent - this.withdrawValue;
    this.amountAfterChange.emit(this.amountFromParent);
  }


}
