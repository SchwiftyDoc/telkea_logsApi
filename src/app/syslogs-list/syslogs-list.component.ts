import { Component, OnInit } from '@angular/core';

import { SyslogService } from '../syslog.service';
import { Syslog } from '../syslog';

@Component({
  selector: 'app-syslogs-list',
  templateUrl: './syslogs-list.component.html',
  styleUrls: ['./syslogs-list.component.css'],
  providers: [ SyslogService ]
})

export class SyslogsListComponent implements OnInit {

  syslogs: Syslog[];

  constructor(private service: SyslogService) {
    this.syslogs = [{
      date: '2017-10-20T07:20:15.973Z',
      ip: '127.0.0.1',
      host: 'LT-Stagiaire4.tellux.dom',
      prival: 6,
      facility: 0,
      severity: 6,
      type: 'RFC3164',
      message: `MSWinEventLog\t6\tApplication\t51\tven. oct. 20 09:20:15 2017\t0\tSolarWinds Log Forwarder for Windows (Application)\t\tN/A\tInformation\tLT-Stagiaire4.tellux.dom\t0\tTest Message from Log Forwarder to the 'Application' event log.\n`
    }];
  }

  ngOnInit() {
    this.syslogs = this.service.getAll();
  }

}
