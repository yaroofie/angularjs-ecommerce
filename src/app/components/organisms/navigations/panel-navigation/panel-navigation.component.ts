import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-navigation',
  templateUrl: './panel-navigation.component.html',
  styleUrls: ['./panel-navigation.component.scss']
})
export class PanelNavigationComponent implements OnInit {
  toggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
