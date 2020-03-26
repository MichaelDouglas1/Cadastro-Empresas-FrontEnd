import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasService } from './empresas.service';
import { EmpresaListagemComponent } from './empresa-listagem/empresa-listagem.component';
import { IncluirEditarEmpresaComponent } from './incluir-editar-empresa/incluir-editar-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaListagemComponent,
    IncluirEditarEmpresaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmpresasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
