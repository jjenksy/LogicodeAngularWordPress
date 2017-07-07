import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private _navButtons: any[];

  constructor() { }

  ngOnInit() {
  }


  get navButtons(): any[] {
    return this._navButtons;
  }

  set navButtons(value: any[]) {
    this._navButtons = value;
  }
}
