import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuvidasComponent } from './duvidas.component';
import { HttpClientModule } from '@angular/common/http';

describe('DuvidasComponent', () => {
  let component: DuvidasComponent;
  let fixture: ComponentFixture<DuvidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ DuvidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuvidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente de dúvidas', () => {
    expect(component).toBeTruthy();
  });
});
