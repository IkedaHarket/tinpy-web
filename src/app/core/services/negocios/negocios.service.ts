import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;

  constructor(private http: HttpClient) { }


}
