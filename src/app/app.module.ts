import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatorComponent } from './creator/creator.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { NoteComponent } from './note/note.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {RouterModule, Routes} from '@angular/router';
import { EditNoteComponent } from './note/edit-note/edit-note.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { NotesFilterPipe } from './notes-filter.pipe';
import { ArchiveNoteComponent } from './note/archive-note/archive-note.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'edit/:id', component: EditNoteComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CreatorComponent,
    ClickOutsideDirective,
    NoteComponent,
    EditNoteComponent,
    HomeComponent,
    NotesFilterPipe,
    ArchiveNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
