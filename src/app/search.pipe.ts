import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from './user-model';

@Pipe({
    name: 'filterUsers',
    pure:false
})
export class SearchPipe implements PipeTransform {

    transform(users: UserModel[], userName: string): UserModel[] {
        if (!users || !userName) {
            return users;
        }

        return users.filter(product => 
             product.first_name.toLowerCase().indexOf(userName.toLowerCase()) !== -1 ||
             product.last_name.toLowerCase().indexOf(userName.toLowerCase()) !== -1);
    }
}