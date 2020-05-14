import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  @Input() id: number

  constructor(private usersServ: UsersService) {}

  onSetToActive(id: number, user: string) {
    this.usersServ.handleUserStatus(id, user, 'active')
  }
}
