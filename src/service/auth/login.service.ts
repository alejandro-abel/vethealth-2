import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { LoginRequestModel } from 'src/model/login/login.model';

@Injectable()
export class LoginService extends BaseService {
  // private servicio = 'api/pagocita';
  private servicio = 'ms-auth/login';

  constructor(private http: HttpClient) {
    super();
    this.url = environment.microservice.auth;
  }

  login(request: LoginRequestModel): Observable<any> {
    return this.post(this.http, this.servicio, request);
  }
}
