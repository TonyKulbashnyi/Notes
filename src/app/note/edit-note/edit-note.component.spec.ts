import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../notes.service';
import { RouterTestingModule } from '@angular/router/testing';
import { EditNoteComponent } from './edit-note.component';
describe('EditNoteComponent', () => {
  let component: EditNoteComponent;
  let fixture: ComponentFixture<EditNoteComponent>;
  beforeEach(() => {
    const activatedRouteStub = () => ({ snapshot: { params: { id: {} } } });
    const notesServiceStub = () => ({
      notes: {},
      changeNote: (note, titleNew, descrNew) => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [EditNoteComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: NotesService, useFactory: notesServiceStub }
      ]
    });
    fixture = TestBed.createComponent(EditNoteComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('notes defaults to: []', () => {
    expect(component.notes).toEqual([]);
  });
  describe('updateNote', () => {
    it('makes expected calls', () => {
      const notesServiceStub: NotesService = fixture.debugElement.injector.get(
        NotesService
      );
      spyOn(notesServiceStub, 'changeNote').and.callThrough();
      component.updateNote();
      expect(notesServiceStub.changeNote).toHaveBeenCalled();
    });
  });
});
