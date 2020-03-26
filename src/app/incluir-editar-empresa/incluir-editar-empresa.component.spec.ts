import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IncluirEditarEmpresaComponent } from "./incluir-editar-empresa.component";

describe("IncluirEditarEmpresaComponent", () => {
  let component: IncluirEditarEmpresaComponent;
  let fixture: ComponentFixture<IncluirEditarEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IncluirEditarEmpresaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirEditarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
