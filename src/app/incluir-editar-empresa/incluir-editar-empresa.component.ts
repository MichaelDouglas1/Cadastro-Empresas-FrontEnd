import { EmpresasService } from "./../empresas.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Location } from "@angular/common";

@Component({
  selector: "app-incluir-editar-empresa",
  templateUrl: "./incluir-editar-empresa.component.html",
  styleUrls: ["./incluir-editar-empresa.component.scss"]
})
export class IncluirEditarEmpresaComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: EmpresasService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required]],
      cnpj: [null, [Validators.required]],
      contato: [null, [Validators.required]],
      email: [null, [Validators.required]],
      tipo_empresa: [null, [Validators.required]],
      razao_social: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      estado: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      logradouro: [null, [Validators.required]],
      complemento: [null, []]
    });
  }

  onSubmit() {
    this.service.create(this.form.value).subscribe();
    this.location.back();
  }

  onCancel() {
    console.log("cancel");
  }
}
