import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasService } from './empresas.service';
import { EmpresaListagemComponent } from './empresa-listagem/empresa-listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmpresasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
