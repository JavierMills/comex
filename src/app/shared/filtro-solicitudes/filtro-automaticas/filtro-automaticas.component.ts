import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-automaticas',
  templateUrl: './filtro-automaticas.component.html',
  styleUrls: ['./filtro-automaticas.component.scss']
})
export class FiltroAutomaticasComponent implements OnInit {

  public filtro = [
    {
      tipo: 1,
      name: 'Folio',
      maxLength: 18,
      value: 'folio',
      formato: 'text'
    },

    {
      tipo: 1,
      name: 'Sucursal',
      maxLength: 4,
      value: 'sucursal',
      formato: 'text'
    },

    {
      tipo: 1,
      name: 'Solicitado',
      maxLength: 12,
      value: 'solicito',
      formato: 'text'
    },

    {
      tipo: 2,
      name: 'Estatus Folio',
      // maxLength: 18,
      value: 'estatus',
      formato: 'text',
      opciones:[
        {
          value: 1,
          descripcion: 'Capturar Solicitud'
        },

        {
          value: 2,
          descripcion: 'Proceso Pendiente Asesor'
        },

        {
          value: 3,
          descripcion: 'Especialista Comex (Rechazos)'
        },

        {
          value: 4,
          descripcion: 'Proceso Pendiente Contraloría'
        },

        {
          value: 5,
          descripcion: 'Proceso Pendiente Cartera'
        },

        {
          value: 6,
          descripcion: 'Fondos de Fomento'
        },

        {
          value: 7,
          descripcion: 'Enviada Nafinet'
        },

        {
          value: 8,
          descripcion: 'Aprobado Nafinet'
        },

        {
          value: 9,
          descripcion: 'Rechazo Nafinet'
        },

        {
          value: 10,
          descripcion: 'Reproceso'
        }
      ]
    },

    {
      tipo: 1,
      name: 'Acreditado',
      maxLength: 20,
      value: 'acreditado',
      formato: 'text'
    },

    {
      tipo: 1,
      name: 'Acreditado',
      maxLength: 20,
      value: 'acreditado',
      formato: 'text'
    }
]

public mostrar!: boolean;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public mostrarT( evento: any){

  }

}
