import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotesService} from '../../notes.service';
import {INotes} from '../../notes';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  notes: INotes[] = [];
  note: INotes;
  id: number;
  @ViewChild('title', {static: false}) title: ElementRef;
  @ViewChild('descr', {static: false}) descr: ElementRef;

  constructor( private notesService: NotesService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;
    this.notes = this.notesService.notes;
    this.note = this.notes[this.id];
  }

  updateNote() {
      const titleNew = this.title.nativeElement.value;
      const descrNew =  this.descr.nativeElement.value;

      this.notesService.changeNote(this.note, titleNew, descrNew).subscribe(
      (data: INotes) => {
        this.notesService.notes[this.id] = data;
      });
  }
}

