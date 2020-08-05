import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NotesService } from '../../notes.service';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { ArchiveNoteComponent } from './archive-note.component';
describe('ArchiveNoteComponent', () => {
  let component: ArchiveNoteComponent;
  let fixture: ComponentFixture<ArchiveNoteComponent>;
  beforeEach(() => {
    const notesServiceStub = () => ({ notes: { push: () => ({}) } });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ArchiveNoteComponent],
      providers: [{ provide: NotesService, useFactory: notesServiceStub }]
    });
    fixture = TestBed.createComponent(ArchiveNoteComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('faUndo defaults to: faUndo', () => {
    expect(component.faUndo).toEqual(faUndo);
  });
  it('notes defaults to: []', () => {
    expect(component.notes).toEqual([]);
  });
});
