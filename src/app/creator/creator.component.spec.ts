import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NotesService } from '../notes.service';
import { CreatorComponent } from './creator.component';
describe('CreatorComponent', () => {
  let component: CreatorComponent;
  let fixture: ComponentFixture<CreatorComponent>;
  beforeEach(() => {
    const notesServiceStub = () => ({
      getNotes: () => ({ subscribe: f => f({}) }),
      notes: { push: () => ({}) },
      addNote: (value, value1) => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CreatorComponent],
      providers: [{ provide: NotesService, useFactory: notesServiceStub }]
    });
    fixture = TestBed.createComponent(CreatorComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('show defaults to: false', () => {
    expect(component.show).toEqual(false);
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
  describe('HideMore', () => {
    it('makes expected calls', () => {
      spyOn(component, 'AddText').and.callThrough();
      component.HideMore();
      expect(component.AddText).toHaveBeenCalled();
    });
  });
  describe('AddText', () => {
    it('makes expected calls', () => {
      const notesServiceStub: NotesService = fixture.debugElement.injector.get(
        NotesService
      );
      spyOn(notesServiceStub, 'addNote').and.callThrough();
      component.AddText();
      expect(notesServiceStub.addNote).toHaveBeenCalled();
    });
  });
});
