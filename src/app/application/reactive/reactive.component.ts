import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User2 } from './../user2';
import { ReactiveService } from './../../services/reactive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  userForm2 = new FormGroup({
    fName: new FormControl('', [Validators.required, Validators.minLength(8)]),
    lName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    newsletter: new FormControl('', Validators.required),
    how: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)

  });

  user2: User2;
  validMessage = "";

  constructor(private serevice: ReactiveService, private router: Router) { }

  ngOnInit(): void {
  }

  get form2() {
    return this.userForm2.controls;
  }
    
  onSubmit() {
    if(this.userForm2.valid) {
      this.serevice.post(this.userForm2.value).subscribe(data => {
        this.userForm2.reset();
        this.router.navigateByUrl('/home');
      })
    }else {
      this.validMessage = " Important: remplir le formulaire avant la soumission "
    }
  }
  
  //console.log(this.userForm2.value);
  

}
