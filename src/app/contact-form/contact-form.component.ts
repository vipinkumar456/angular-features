import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


  constructor() {
   
  }

  ngOnInit(): void {
  }
  log(firstName: any, event: any) {

    console.log(event);
    console.log(firstName);
    console.log(firstName.viewModel);

  }
  submit(f:any)
  {
    alert("error");
    console.log(f);
  }
  contactMethods=
  [
    {id:1,name: 'Email'},
    {id:2,name: 'pass'}
  ]

}
