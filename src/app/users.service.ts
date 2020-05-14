import { Injectable } from '@angular/core'
import { CountersService } from './counters.service'

@Injectable()
export class UsersService {

    activeUsers = ['Max', 'Anna']
    inactiveUsers = ['Chris', 'Manu']
    activeCount = 0
    inactiveCount = 0

    constructor(private countServ: CountersService) {}

    handleUserStatus(id: number, user: string, status: string) {
        if(status === 'active') {
            this.activeUsers.push(user)
            this.inactiveUsers.splice(id, 1)
            this.activeCount ++
            this.countServ.logActiveIncrease(this.activeCount)
        } else if (status === 'inactive') {
            this.inactiveUsers.push(user)
            this.activeUsers.splice(id, 1)
            this.inactiveCount ++
            this.countServ.logInactiveIncrease(this.inactiveCount)
        }
    }

}