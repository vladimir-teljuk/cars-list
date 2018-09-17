import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TransferBrandService {

  constructor(private http: HttpClient) { }

  public getAllCarList(): Observable<any> {
    return this.http.get('api/brands');
  }

  public getModels(name): Observable<any> {
      return this.http.get('api/brands/', name);

  }

    public delModels(name): Observable<any> {
        return this.http.delete('api/brands/', name);

    }

}
