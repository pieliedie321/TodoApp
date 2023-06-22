import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app.component';
import { StoreTaskService } from './services/StoreTasksService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StoreTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
