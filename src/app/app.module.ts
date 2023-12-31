import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Teste01Component } from './teste01/teste01.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Teste02Component } from './teste02/teste02.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TabelasComponent } from './tabelas/tabelas.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { ArvoreComponent } from './arvore/arvore.component';
import { MatTreeModule } from '@angular/material/tree';
import { ArrastaSoltaComponent } from './arrasta-solta/arrasta-solta.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EventoComponent } from './evento/evento.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {EventoDialogoComponent} from './evento/evento-dialogo/evento-dialogo.component'
import {DialogoAtributos} from '../app/evento/dialogo-atributos.model'


@NgModule({
  declarations: [
    AppComponent,
    EventoDialogoComponent,
    Teste01Component,
    HomeComponent,
    Teste02Component,
    TabelasComponent,
    DashboardComponent,
    ArvoreComponent,
    ArrastaSoltaComponent,
    EventoComponent

  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule
  ],
  providers: [DialogoAtributos],
  bootstrap: [AppComponent]
})
export class AppModule { }
