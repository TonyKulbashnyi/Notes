import {Pipe, PipeTransform} from '@angular/core';
import {INotes} from './notes';

@Pipe({
  name: 'notesFilter'
})
export class NotesFilterPipe implements PipeTransform {

  transform(notes: INotes[], searchValue: string) {
    if (notes.length === 0 || searchValue === '') {
      return notes;
    }

    return notes.filter((note) =>
      note.descr.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1 ||
      note.title.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1);
  }
}

