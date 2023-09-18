import { Component } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog'
import {EventoDialogoComponent} from './evento-dialogo/evento-dialogo.component'
import { Teste01Component } from '../teste01/teste01.component';
import { DialogoAtributos } from './dialogo-atributos.model';
import { Inject } from '@angular/core';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-dialogo',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})



export class EventoComponent {


  constructor(
  private dialog: MatDialog,
  public objEvento: DialogoAtributos) {}


   // Inicio do metodo abreDialogo()
  abreDialogo(): void {
    const referenciaDialogo = this.dialog.open(EventoDialogoComponent,{
      data: this.objEvento // Passo o modelo de atributos para o data do dialog
    });

    referenciaDialogo.afterClosed().subscribe(result => {
      // if (result.nome) {this.eventoNome = result.nome}
      // if (result.local) {this.eventoLocal = result.local}
      this.objEvento = result
      console.log(`Diálogo fechado com resultado:` + JSON.stringify(Object.entries(result), null, 2));
    });

  }
  // Fim do metodo
}


