import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ResetPasswordComponent  implements OnInit {

  model: any = {
    email: '',
    new_password: ''
  };
  flag: number;

  constructor() { }

  ngOnInit() {}

  getData() {
    let data: any = {};
    if(this.model?.email == '' && this.model?.new_password == '') {
      data = {
        title: 'Forgot password', 
        subTitle: 'Enter your email for the verification process.', 
        button: 'VERIFY'
      };
      this.flag = 1;
    } else {
      data = {
        title: 'Reset password', 
        subTitle: 'Enter your new password, must be atleast 8 characters long.', 
        button: 'SAVE'
      };
      this.flag = 2;
    }
    console.log(data);
    return data;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.model = {
      email: form.value.email || '',
      new_password: form.value.new_password || ''
    };
  }

}
