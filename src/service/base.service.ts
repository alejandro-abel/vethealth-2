import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseService {
  public url!: string;
  constructor() {
    // this.url = environment.microservice.service;
  }

  get(http: HttpClient, servicio: string, request?: any): Observable<any> {
    console.log(servicio);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    const o = { headers };
    if (request) {
      const params = '?' + this.getParameters(request);
      return http.get(this.url + servicio + params, o);
    }

    return http.get(this.url + servicio, o);
  }

  getV2(http: HttpClient, servicio: string, request?: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    const o = { headers };
    if (request) {
      const params = '/' + this.getParametersV2(request);
      return http.get(this.url + servicio + params, o);
    }

    return http.get(this.url + servicio, o);
  }

  post(http: HttpClient, servicio: string, request: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Methods', 'POST');
    headers = headers.append('accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    const o = { headers };
    // const service = servicio.substr(4, servicio.length);
    // console.log(service);
    return http.post(this.url + servicio, request, o);
  }


  delete(http: HttpClient, servicio: string, request: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Methods', 'DELETE');
    headers = headers.append('accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');

    const options = {
      headers,
      body: request
    };
    return http.post(this.url + servicio, options);
  }

  view(http: HttpClient, servicio: string, request: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Methods', 'HEAD');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    const o = { headers };
    return http.head(this.url + servicio);
  }

  private getParameters(request: any): string {
    const respuesta = Object.keys(request).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(request[k])).join('&');
    return respuesta;
  }

  private getParametersV2(request: any): string {
    const respuesta = Object.keys(request).map(k => encodeURIComponent(request[k])).join('/');
    return respuesta;
  }
}

