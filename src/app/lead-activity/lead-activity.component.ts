import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-activity',
  templateUrl: './lead-activity.component.html',
  styleUrls: ['./lead-activity.component.css']
})
export class LeadActivityComponent implements OnInit {

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
