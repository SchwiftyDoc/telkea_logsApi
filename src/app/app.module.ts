import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SyslogsListComponent } from './syslogs-list/syslogs-list.component';
import { SyslogService } from './syslog.service';
import {TruncatePipe} from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SyslogsListComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SyslogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
