import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private getURL = 'http://localhost:8080/getAll';
  private postURL = 'http://localhost:8080/saveProperty';
  private deleteURL = 'http://localhost:8080/deleteProperty';
   
  constructor(private httpClient: HttpClient) { }
  
  getProperties(){
    return this.httpClient.get(this.getURL);
  }

  saveProperty(data: any){
    return this.httpClient.post(this.postURL, data);
  }

  deleteProperty(data: any){
    return this.httpClient.post(this.deleteURL, data);
  }
  
}