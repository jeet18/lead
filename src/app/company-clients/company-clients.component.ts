import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-clients',
  templateUrl: './company-clients.component.html',
  styleUrls: ['./company-clients.component.css']
})
export class CompanyClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(form){
    var firstName = form.firstName;
    console.log(firstName);
  
    var lastName = form.lastName;
    console.log(lastName);
  
    var comment = form.comment;
    console.log(comment);
  }

}

