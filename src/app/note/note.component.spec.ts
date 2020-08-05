import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NotesService } from '../notes.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileArchive } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { NoteComponent } from './note.component';
describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;
  beforeEach(() => {
    const notesServiceStub = () => ({
      getNotes: () => ({ subscribe: f => f({}) }),
      notes: { splice: () => ({}) },
      deleteNote: note => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NoteComponent],
      providers: [{ provide: NotesService, useFactory: notesServiceStub }]
    });
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('notes defaults to: []', () => {
    expect(component.notes).toEqual([]);
  });
  it('archiveNotes defaults to: []', () => {
    expect(component.archiveNotes).toEqual([]);
  });
  it('faCheck defaults to: faCheck', () => {
    expect(component.faCheck).toEqual(faCheck);
  });
  it('faEdit defaults to: faEdit', () => {
    expect(component.faEdit).toEqual(faEdit);
  });
  it('faDelete defaults to: faTrashAlt', () => {
    expect(component.faDelete).toEqual(faTrashAlt);
  });
  it('faArchive defaults to: faFileArchive', () => {
    expect(component.faArchive).toEqual(faFileArchive);
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
