import { Component, OnInit } from '@angular/core';
import { Aplicativo } from 'src/app/models/Menu';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public dataAplicativo?: Aplicativo;



  constructor(private usuarioServices: UsuariosService) { }

  ngOnInit(): void {
    this.getAplicativo();
  }

  getAplicativo(){
    this.usuarioServices.getAplicativos().subscribe(res => {
      this.dataAplicativo = res[0];
      console.log(this.dataAplicativo?.dscDescripcion, 'this.data');
    })
  }

}
