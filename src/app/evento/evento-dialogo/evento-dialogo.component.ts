import { Component,Inject } from '@angular/core';
import { EventoComponent } from '../evento.component'
import { DialogoAtributos } from '../dialogo-atributos.model'
import { MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-evento-dialogo',
  templateUrl: './evento-dialogo.component.html',
  styleUrls: ['./evento-dialogo.component.css']
})


export class EventoDialogoComponent {
formEvento: FormGroup;


  constructor (public fb: FormBuilder,
    public referenciaDialog: MatDialogRef<EventoComponent>, // Injeta nessa variavel as funções do dialog que foi Iniciado no meu componente Evento
    @Inject(MAT_DIALOG_DATA) public data: DialogoAtributos) // Aqui eu injeto os valores de data para o meu componente e tambem defino que ele tera o modelo igual ao meu modelo "DialogoAtributos"
     {

      this.formEvento = this.fb.group({
        company: null,
        nome: [data.nome, Validators.required],
        dataInicio: [data.dataInicio],
        dataFim: [data.dataFim],
        local: [data.local, Validators.required],
        convidados: [data.convidados],
        ativo: [data.ativo]
      });

  }

  ngOnInit() {
  }

  salvar(): void  {
    this.referenciaDialog.close(this.formEvento.value)
  }

}
