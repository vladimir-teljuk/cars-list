import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthService],
})
export class LoginComponent implements OnInit {

    public email: string;
    public password: string;
    returnUrl: string;

    constructor(private auth: AuthService,
                private router: Router,
                private route: ActivatedRoute) {
        this.auth = auth;
    }

    ngOnInit() {
        this.auth.logout();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }

    public login(): void {
        this.auth.login(this.email, this.password).subscribe(data => {
            this.router.navigate([this.returnUrl]);
        });
    }
    public registration(): void {
        this.router.navigateByUrl('registration');
    }

}
