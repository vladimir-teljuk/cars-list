import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthService, UsersService],
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService, private userList: UsersService, private router: Router) {
        this.auth = auth;
        this.userList = userList;
    }

    ngOnInit() {
        this.userList.SetUsers();
    }

    public login(email: string, password: string) {
        if (this.auth.Compare(email, password)) {
            this.router.navigateByUrl('car-list');
        }
    }


}
