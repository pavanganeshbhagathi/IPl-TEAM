import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interface/contact';

@Component({
  selector: 'app-contect-list',
  templateUrl: './contect-list.component.html',
  styleUrls: ['./contect-list.component.css'],
})
export class ContectListComponent implements OnInit {
   contacts: userContact[];
  newContact: userContact;
  constructor() {}

  ngOnInit() {
    this.contacts = contacts;
  }

  addContact(newContact): void {
    console.log('Add contact has been called');

    this.contacts.unshift(newContact);


  }


}


