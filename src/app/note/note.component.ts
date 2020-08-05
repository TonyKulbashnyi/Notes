import {Component, Input, OnChanges, OnInit} from '@angular/core';

import {NotesService} from '../notes.service';

import {INotes} from '../notes';

import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {faFileArchive} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {
  notes: INotes[] = [];
  archiveNotes: INotes[] = [];
  @Input() index;
  faCheck = faCheck;
  faEdit = faEdit;
  faDelete = faTrashAlt;
  faArchive = faFileArchive;
  searchValue = '';

  constructor(private notesService: NotesService) {
  }

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((data: INotes[]) => {
      this.notesService.notes = data;
      this.notes = this.notesService.notes;
    });
  }

  ngOnChanges(): void {
    this.notes = this.notesService.notes;
  }

  makeDone(i) {
    this.notes[i].done = !this.notes[i].done;
  }

  deleteNote(i) {
    const note = this.notesService.notes[i];
    this.notesService.deleteNote(note).subscribe(() => {
      this.notesService.notes.splice(i, 1);
    });
  }

  archiveNote(i) {
    this.archiveNotes.push(this.notes[i]);
    this.notes.splice(i, 1);
  }
}
