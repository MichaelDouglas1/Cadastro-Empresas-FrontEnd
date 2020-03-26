import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EmpresaListagemComponent } from "./empresa-listagem.component";

describe("EmpresaListagemComponent", () => {
  let component: EmpresaListagemComponent;
  let fixture: ComponentFixture<EmpresaListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaListagemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
