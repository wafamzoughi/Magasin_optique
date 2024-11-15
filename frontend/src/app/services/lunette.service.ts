import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})
export class LunetteService {

  constructor(private httpClient: HttpClient) { }

  getListLunettes(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/lunettes`);
  }

  postLunette(data: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/lunettes`, data);
  }

  deleteLunette(lunetteId: string): Observable<any> {
    return this.httpClient.delete<any>(`${environment.apiUrl}/${environment.prefix}/lunettes/${lunetteId}`);
  }
  getLunettes(lunetteId: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/lunettes/${lunetteId}`);
  }

  updateLunette(lunetteId: string, data: any): Observable<any> {
    return this.httpClient.put<any>(`${environment.apiUrl}/${environment.prefix}/lunettes/${lunetteId}`, data);
  }
  
 
 
  
}

