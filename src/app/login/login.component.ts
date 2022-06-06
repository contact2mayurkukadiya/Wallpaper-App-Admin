import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  adminDetail: any = {
    email: '',
    password: ''
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  doAdminLogin(adminDetail) {
    // this.apiService.getData();
    if (typeof adminDetail == "undefined" || adminDetail == null || adminDetail == "") {
      console.log('Please Enter Email');
    }
    else if (typeof adminDetail.email == "undefined" || adminDetail.email == null || adminDetail.email == "") {
      console.log('Please Enter Email');
    }
    else if (typeof adminDetail.password == "undefined" || adminDetail.password == null || adminDetail.password == "") {
      console.log('Please Enter Password');
    }
    else {
      this.apiService.postData('doLogin', {}, {
        "email_id": adminDetail.email,
        "password": adminDetail.password
      }).then((result: any) => {
        if (result.code == 200) {
          localStorage.setItem('at', result.data.token);
          localStorage.setItem('ad', result.data.user_detail);
          
        }
        else if (result.code == 201) {

        } else {

        }
      }).catch(e => {

      });
    }
  }
}
