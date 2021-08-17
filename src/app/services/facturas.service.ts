import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacturaResponse } from '../models/factura-response';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(
    private http:HttpClient
  ) { }

  getBills(id){
    return this.http.get<FacturaResponse>(`http://localhost:3000/api/facturas/${id}`);
  }

}

