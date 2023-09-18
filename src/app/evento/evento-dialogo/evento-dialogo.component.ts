import { Component,Inject } from '@angular/core';
import { EventoComponent } from '../evento.component'
import { DialogoAtributos } from '../dialogo-atributos.model'
import { MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-evento-dialogo',
  templateUrl: './evento-dialogo.component.html',
  styleUrls: ['./evento-dialogo.component.css']
})

export class EventoDialogoComponent {
formEvento: FormGroup;

  constructor (public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogoAtributos) {

      this.formEvento = this.fb.group ({
        nome: [data.nome],
        dataInicio: [data.dataInicio],
        dataFim: [data.dataFim],
        local: [data.local],
        convidados: [data.convidados],
        ativo: [data.ativo]
      });

  }

  ngOnInit() {
  }

  salvar(): void  {
    this..close(this.formEvento.value);
  }

}
