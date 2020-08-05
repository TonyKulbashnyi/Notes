import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NotesService } from './notes.service';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    const notesServiceStub = () => ({
      getNotes: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [{ provide: NotesService, useFactory: notesServiceStub }]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('title defaults to: jsmp-angular', () => {
    expect(component.title).toEqual('jsmp-angular');
  });
  it('notes defaults to: []', () => {
    expect(component.notes).toEqual([]);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const notesServiceStub: NotesService = fixture.debugElement.injector.get(
        NotesService
      );
      spyOn(notesServiceStub, 'getNotes').and.callThrough();
      component.ngOnInit();
      expect(notesServiceStub.getNotes).toHaveBeenCalled();
    });
  });
});
