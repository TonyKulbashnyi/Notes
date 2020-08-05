import { TestBed } from '@angular/core/testing';
import { NotesFilterPipe } from './notes-filter.pipe';
describe('NotesFilterPipe', () => {
  let pipe: NotesFilterPipe;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [NotesFilterPipe] });
    pipe = TestBed.get(NotesFilterPipe);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transforms X to Y', () => {
    const value: any = 'X';
    const args: string[] = [];
    expect(pipe.transform(value, args)).toEqual('Y');
  });
});
