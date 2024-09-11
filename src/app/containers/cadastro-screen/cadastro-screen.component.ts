import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-cadastro-screen',
  templateUrl: './cadastro-screen.component.html',
  styleUrls: ['./cadastro-screen.component.scss']
})
export class CadastroScreenComponent implements OnInit {
  formularioVenda = new FormGroup({
    type: new FormControl('Casa'),
    name: new FormControl(''),
    adress: new FormControl(''),
    houseNumber: new FormControl(Number),
    bairro: new FormControl(''),
    floorNumber: new FormControl(Number),
    roomQuantity: new FormControl(Number),
    suiteQuantity: new FormControl(Number),
    salasQuantity: new FormControl(Number),
    dinnerQuantity: new FormControl(Number),
    parkingSpots: new FormControl(Number),
    societyCost: new FormControl(Number),
    closetInbuted: new FormControl(Boolean),
    description: new FormControl('')
  });

  optionsBairro = [ 
    {value: 'Barreiro', viewValue: 'Barreiro'},
    {value: 'Centro-Sul', viewValue: 'Centro-Sul'},
    {value: 'Pampulha', viewValue: 'Pampulha'},
    {value: 'Oeste', viewValue: 'Oeste'},
    {value: 'Norte', viewValue: 'Norte'},
    {value: 'Noroeste', viewValue: 'Noroeste'},
    {value:  'Nordeste', viewValue:  'Nordeste'},
    {value:  'Leste', viewValue:  'Leste'},
    {value:  'Venda Nova', viewValue:  'Venda Nova'}
  ]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  salvarDados(e:any){
    this.postGeneric().subscribe(element=>{
      console.log(element)
    })
  }

  postGeneric(): Observable<any> {
    const obj = {
      tipo_imovel: this.formularioVenda.get('type')?.value,
      nome_proprietario: this.formularioVenda.get('type')?.value,
    }
    return this.http.post<any>(`url/student`,obj)
  }

}
