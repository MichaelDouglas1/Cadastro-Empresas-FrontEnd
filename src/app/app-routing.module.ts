import { IncluirEditarEmpresaComponent } from "./incluir-editar-empresa/incluir-editar-empresa.component";
import { EmpresaListagemComponent } from "./empresa-listagem/empresa-listagem.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: EmpresaListagemComponent },
  { path: "criar", component: IncluirEditarEmpresaComponent },
  { path: "editar/:id", component: IncluirEditarEmpresaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
