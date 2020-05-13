import { EventEmitter, Injectable } from '@angular/core'
import { CountersService } from './counters.service'

@Injectable()
export class UsersService {

    activeUsers = ['Max', 'Anna']
    inactiveUsers = ['Chris', 'Manu']

    countUpdated = new EventEmitter<number>()

    constructor(private countServ: CountersService) {}

    handleUserStatus(id: number, user: string, status: string) {
        if(status === 'active') {
            this.activeUsers.push(user)
            this.inactiveUsers.splice(id, 1)
        } else if (status === 'inactive') {
            this.inactiveUsers.push(user)
            this.activeUsers.splice(id, 1)
        }
    }

}