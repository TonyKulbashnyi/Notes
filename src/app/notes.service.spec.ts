import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { INotes } from './notes';
import { NotesService } from './notes.service';
describe('NotesService', () => {
  let service: NotesService;
  beforeEach(() => {
    const iNotesStub = () => ({ title: {}, descr: {}, id: {} });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NotesService, { provide: INotes, useFactory: iNotesStub }]
    });
    service = TestBed.get(NotesService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('notes defaults to: []', () => {
    expect(service.notes).toEqual([]);
  });
  describe('getNotes', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      service.getNotes().subscribe(res => {
        expect(res).toEqual();
      });
      const req = httpTestingController.expectOne(
        'http://localhost:3000/notes'
      );
      expect(req.request.method).toEqual('GET');
      req.flush();
      httpTestingController.verify();
    });
  });
});
