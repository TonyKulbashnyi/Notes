import {Injectable, OnInit} from '@angular/core';
import {INotes} from './notes';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private httpClient: HttpClient) {
  }

  notes: INotes[] = [];

  public getNotes() {
    return this.httpClient.get('http://localhost:3000/notes');
  }


  public addNote(titleNote: string, descrNote: string) {
    const note = {
      title: titleNote,
      descr: descrNote,
      done: false
    };

    return this.httpClient.post('http://localhost:3000/notes', note);
  }

  public changeNote(noteNew: INotes,  title: string, descr: string) {
    noteNew.title = title;
    noteNew.descr = descr;
    return this.httpClient.put(`http://localhost:3000/notes/${noteNew.id}`, noteNew);
  }

  public deleteNote(note) {
    return this.httpClient.delete(`http://localhost:3000/notes/${note.id}`, note);
  }
}
