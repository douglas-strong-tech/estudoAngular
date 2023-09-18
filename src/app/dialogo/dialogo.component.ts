import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import {ComponenteDialogoComponent} from './componente-dialogo/componente-dialogo.component'
@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {

  constructor(public dialog: MatDialog) {}

  abreDialogo() {
    const referenciaDialogo = this.dialog.open(ComponenteDialogoComponent);

    referenciaDialogo.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}


