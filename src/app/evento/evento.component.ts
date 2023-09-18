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


  // // atributos da minha classe
  // export interface objData {
  //   eventoNome: string;
  //   eventoDataInicio: Date;
  //   eventoDataFim: Date;
  //   eventoLocal: string;
  //   eventoConvidados: number;
  //   eventoAtivo: boolean;
  //   // Fim dos atributos
  // }

export class EventoComponent {
  // atributos da minha classe
      eventoNome: string;
      eventoDataInicio: Date;
      eventoDataFim: Date;
      eventoLocal: string;
      eventoConvidados: number;
      eventoAtivo: boolean;
    // Fim dos atributos

  constructor(
  private dialog: MatDialog,
  public formEvento: DialogoAtributos) {
    this.eventoNome = "teste01";
    this.eventoDataInicio = new Date();
    this.eventoDataFim =  new Date();
    this.eventoLocal = "";
    this.eventoConvidados = 0;
    this.eventoAtivo = false;
    // fbEvento.nome = "Teste - 001";
  }

   // Inicio do metodo abreDialogo()
  abreDialogo(): void {
    const referenciaDialogo = this.dialog.open(EventoDialogoComponent,{
      data:{ nome: this.eventoNome,
            dataInicio: this.eventoDataInicio,
            dataFim: this.eventoDataFim,
            local: this.eventoLocal,
            convidados: this.eventoConvidados,
            ativo: this.eventoAtivo}
    });

    referenciaDialogo.afterClosed().subscribe(result => {
      console.log(`Diálogo fechado com resultado: ${result}`);
    });

  }
  // Fim do metodo
}


