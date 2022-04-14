import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss'],
})
export class ButtonIconComponent implements OnInit {
  @Input() icon ?: string;
  @Input() text ?: string;

  constructor()
  {
  }

  ngOnInit(): void {}
}
