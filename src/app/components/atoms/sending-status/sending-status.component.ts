import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../../Contracts/IUser';
@Component({
  selector: 'app-sending-status',
  templateUrl: './sending-status.component.html',
  styleUrls: ['./sending-status.component.scss'],
})
export class SendingStatusComponent implements OnInit {
  @Input() user?: IUser;

  constructor(){}

  ngOnInit(): void {}

  req: any = {
    _sending: ['Getting user information'],
  };

  $t(key: string): string {
    return key;
  }
}
