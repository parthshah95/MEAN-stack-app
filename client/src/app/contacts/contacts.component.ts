import { Component, OnInit,NgModule } from '@angular/core';
import {ContactService} from '../contact.service'
import {Contact} from '../contact';
import {ResObj} from './Implement';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name : string;
  last_name : string;
  contact_no: string;
  
  constructor(private contactService:ContactService) {

   }

  addContact(){
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      contact_no: this.contact_no
    }
    this.contactService.addContacts(newContact)
    .subscribe(contact=>{
      this.contacts.push(newContact);
    })
  }
  deleteContact(id:any){
   var data: ResObj;
    var contacts=this.contacts
    this.contactService.deleteContact(id)
    .subscribe(data =>{
      if(data.n==1){
        for(var i =0;i<contacts.length;i++){
          if(contacts[i]._id==id){
            contacts.splice(i,1);      
          }
        }
      }
    })
  }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = <any>contacts)
  };
}