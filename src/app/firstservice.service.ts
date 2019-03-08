import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor() { }
arr = [{
    "FirstName": "barry",
    "LastName": "allen",
    "Email": "barry@gmail.com",
    "Id": 2332,
    "PhoneNumber": 9343445245,
    "Designation": "Flash",
    "DOB": 8-12-1992
},
{
    "FirstName": "chark",
    "LastName": "kent",
    "Email": "charkKent@gmail.com",
    "Id": 632,
    "PhoneNumber": 9343445245,
    "Designation": "superman",
    "DOB": 1-12-1932
},
{
    "FirstName": "bruce",
    "LastName": "wayne",
    "Email": "bruceW@gmail.com",
    "Id": 333,
    "PhoneNumber": 9343445245,
    "Designation": "Batman",
    "DOB": 2-02-1989
},
{
    "FirstName": "peter",
    "LastName": "parker",
    "Email": "peter@gmail.com",
    "Id": 349,
    "PhoneNumber": 9343445245,
    "Designation": "spiderman",
    "DOB": 34-33-1990
}


]
  newArray;

  setdata() {
    this.newArray = this.arr;
  }
  getdata() {
    return this.newArray;
  }
}
