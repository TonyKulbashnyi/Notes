import {Component, Input, OnInit} from '@angular/core';
import {INotes} from '../../notes';

import {faUndo} from '@fortawesome/free-solid-svg-icons';
import {NotesService} from '../../notes.service';


@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit {
  @Input() archiveNotes;
  faUndo = faUndo;
  notes: INotes[] = [];

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }

  backToNotes(i) {
    this.notesService.notes.push(this.archiveNotes[i]);
    this.archiveNotes.splice(i, 1);
  }

}
