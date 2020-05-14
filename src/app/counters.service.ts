import { Injectable } from "@angular/core";

@Injectable()
export class CountersService {

    logInactiveIncrease(count: number) {
        console.log('You have switched from ACTIVE to INACTIVE ' + count + ' times')
    }

    logActiveIncrease(count: number) {
        console.log('You have switched from INACTIVE to ACTIVE ' + count + ' times')
    }
}