import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { AuthConstants } from '../config/auth-constants';
import { AuthService } from './../services/auth.service';
import { StorageService } from './../services/storage.service';
import { ToastService } from './../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: ''
  password: ''


  constructor(private router:Router,
              public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

async main(){
  this.router.navigate(['/main']);
}
async signin(){
  const  {email, password} = this
  
  if(email==password){
    if (email && password){
      alert('login successfull, click on Ok');
    }
  }

try{
    const res = await this.ngFireAuth.signInWithEmailAndPassword(email, password);
    console.log(res);
    alert('login successfull, click on Ok');
     this.router.navigate(['/home']);
  }

catch(error){
  alert('login failed');
}
}
}


// export class LoginPage implements OnInit {
//   postData = {
//     email: '',
//     password: ''
//     };
    
//     constructor(
//     private router: Router,
//     private authService: AuthService,
//     private storageService: StorageService,
//     private toastService: ToastService
//     ) {}
    
//     ngOnInit() {}

//     async main(){
//   this.router.navigate(['/main']);
// }
    
//     validateInputs() {
//     let email = this.postData.email.trim();
//     let password = this.postData.password.trim();
//     return (
//     this.postData.email &&
//     this.postData.password &&
//     email.length > 0 &&
//     password.length > 0
//     ); 
//     }
    
//     loginAction() {
//     if (this.validateInputs()) {
//     this.authService.login(this.postData).subscribe(
//     (res: any) => {
//     if (res.userData) {
//     // Storing the User data.
//     this.storageService.store(AuthConstants.AUTH, res.userData);
//     this.router.navigate(['home']);
//     } else {
//       this.toastService.presentToast('incorrect password.');
//     }
//     },
//     (error: any) => {
//       this.toastService.presentToast('Network Issue.');
//     }
//     );
//     } else {
//       this.toastService.presentToast('Please enter email/username or password.');
//     }
//     }
//     }