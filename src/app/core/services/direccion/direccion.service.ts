import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  private _tinpyBackendURL: string = environment.tinpyBackendURL;

  
  constructor(private http: HttpClient) {}

  postDireccion(lngLat:any){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders()
                    .set('x-token',token);
                    console.log(lngLat);
    return this.http.post<any>(`${this._tinpyBackendURL}/api/direcciones`,{
      lng: lngLat.lng,
      lat : lngLat.lat,
    },{headers})
  }
}
