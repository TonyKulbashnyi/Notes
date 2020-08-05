import {Component, OnInit} from '@angular/core';
import {NotesService} from './notes.service';
import {INotes} from './notes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NotesService]
})
export class AppComponent implements OnInit {
  title = 'jsmp-angular';
  notes: INotes[] = [];

  constructor(private notesService: NotesService) {
  }

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((data: INotes[]) => {
      this.notes = data;
    });
  }

}
