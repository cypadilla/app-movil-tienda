import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturasService } from 'src/app/services/facturas.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss'],
})
export class FacturaComponent implements OnInit {

  formFactura:FormGroup;
  
  constructor(
    private formBuilder:FormBuilder,
    private facturaService:FacturasService,
    private router:ActivatedRoute,
    private route: Router
  ) {
    this.buildForm();
   }

  ngOnInit() {}

  onSave(){

    console.log(this.formFactura.value)
  
    if(this.formFactura.valid){
      const productData = {
        nombreProducto: this.formFactura.value.nombre,
        valor: this.formFactura.value.valor,
        idUsuario:this.formFactura.value.idUsuario
      } 
      this.facturaService.setBills(productData).subscribe( response => {
        console.log('response registro',response)
        if(response){
          this.formFactura.reset();
          this.route.navigateByUrl('/ges-factura')
        }else{
          alert('Error, ingrese los datos denuevo')
        }
      })
    }else{

      console.log('in-valido')
    }

  }

  private buildForm(){
    this.formFactura = this.formBuilder.group({
      nombre:['',[Validators.required]],
      idUsuario:['',[Validators.required]],
      valor:['',[Validators.required]],
      // fecha:['',[Validators.required]]
    });
  }


}
