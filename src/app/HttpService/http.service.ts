import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UsersInterface } from '../Interfaces/user.interface';
import { Observable } from 'rxjs';

const apiUrl = 'https://jsonplaceholder.typicode.com/'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  public getUsers(): Observable<UsersInterface[]> {
    return this.http.get<UsersInterface[]>(`${apiUrl}users`)
  }
}
