import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  private api="https://jsonplaceholder.typicode.com/users"

  constructor(
    private http: HttpClient,
  ) { }

  getuser(){
    return this.http.get<any[]>(this.api)
  }

}
