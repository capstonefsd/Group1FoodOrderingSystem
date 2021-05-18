import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerregisterService } from '../customerregister.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  customer: Customer = new Customer();

  constructor(private registerService: CustomerregisterService) {}

  ngOnInit(): void {}

  //To save the customer details
  save() {
    this.registerService.createCustomer(this.customer).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
    this.customer = new Customer();
  }

  onSubmit() {
    this.save();
  }
}
