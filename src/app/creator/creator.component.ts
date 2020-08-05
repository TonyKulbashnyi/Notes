import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NotesService} from '../notes.service';
import {INotes} from '../notes';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss'],
})
export class CreatorComponent implements OnInit {
  show = false;
  @ViewChild('title', {static: false}) title: ElementRef;
  @ViewChild('descr', {static: false}) descr: ElementRef;

  constructor(private notesService: NotesService) {
  }

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((data: INotes[]) => {
      this.notesService.notes = data;
    });
  }

  ShowMore() {
    this.show = true;
  }

  HideMore() {
    this.show = false;
    this.AddText();
  }

  AddText() {
    if (this.title.nativeElement.value || this.descr.nativeElement.value) {
      this.notesService.addNote(
        this.title.nativeElement.value,
        this.descr.nativeElement.value)
        .subscribe((data: INotes) => {
          this.notesService.notes.push(data);
      });

      this.title.nativeElement.value = '';
      this.descr.nativeElement.value = '';
    }

  }
}
