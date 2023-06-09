import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerCopmonent {
  @Input()
  serverName: string = '';

  serverID: number = Math.round(Math.random() * 10);
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getBackgroundColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
