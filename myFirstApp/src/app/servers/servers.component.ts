import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: `app-servers`,
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  newServerAllowed = false;
  serverCreationStatus = 'No server was created'
  serverName = 'testServer';
  serverCreated = false;
  servers = ['TestServer'];

  constructor() {
    setTimeout(() => {
      this.newServerAllowed = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is '+this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
