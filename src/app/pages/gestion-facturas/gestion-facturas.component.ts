import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturaResponse } from 'src/app/models/factura-response';
import { FacturasService } from 'src/app/services/facturas.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

  openPdfTables(factura) {
    const documentDefinition = {
      content: [
        {
          table: {

            headerRows: 1,
            widths: ['*', '*'],

            body: [
              ['Producto', { text: factura.nombreProducto, bold: true }],
              ['Valor', { text: factura.valor, bold: true }],
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
  }


}
