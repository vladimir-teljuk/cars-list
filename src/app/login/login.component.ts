import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthService],
})
export class LoginComponent implements OnInit {

    public email: string;
    public password: string;

    constructor(private auth: AuthService, private router: Router) {
        this.auth = auth;
    }

    ngOnInit() {

    }

    public login(): void {
        const email = this.email.replace('@', '-');
        this.auth.getUser(email, this.password).subscribe(data => {
            if (email === data[0].login && this.password === data[0].password) {
                this.router.navigateByUrl('car-list');
            }
        });
    }

}
