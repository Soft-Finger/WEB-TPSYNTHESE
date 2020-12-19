import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { User2 } from './../application/user2';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService extends GenericService<User2, number> {

  constructor(http: HttpClient) {
    super(http, " http://localhost:3004/myApi");
   }
}
