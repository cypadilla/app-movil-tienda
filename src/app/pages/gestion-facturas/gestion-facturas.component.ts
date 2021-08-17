import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturaResponse } from 'src/app/models/factura-response';
import { FacturasService } from 'src/app/services/facturas.service';

@Component({
  selector: 'app-gestion-facturas',
  templateUrl: './gestion-facturas.component.html',
  styleUrls: ['./gestion-facturas.component.scss'],
})
export class GestionFacturasComponent implements OnInit {

  facturas:any
  constructor(
    private facturaService: FacturasService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getBills()
  }

  getBills(){
    let id = localStorage.getItem('id')
    this.facturaService.getBills(id).subscribe( factura => {
      this.facturas = factura;
    })
  }

}
