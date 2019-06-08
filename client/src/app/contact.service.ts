import  { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Contact} from './contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  //retrieving contacts
  getContacts(){
    return this.http.get('http://localhost:3000/api/contacts');
  }

  //adding contacts
  addContacts(newContact: any){
    var headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/contacts',newContact,{headers : headers});
  }

  //deleting contact
  deleteContact(id: string){
    return this.http.delete('http://localhost:3000/api/contacts/'+id);
  }
}
