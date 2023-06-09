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

  password: string = 'tuna';

  serverID: number = Math.round(Math.random() * 10);
  serverStatus: string = 'offline';

  isDetailsVisible = false;

  clickLog: number[] = [];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getBackgroundColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getBlueBackgroundColor(i: number) {
    if (i > 3) return 'blue';
    else return;
  }

  onToggleDetails(event: Event) {
    this.isDetailsVisible = !this.isDetailsVisible;
    this.clickLog.push(event.timeStamp);
  }
}
