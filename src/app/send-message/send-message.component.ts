import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  public year;
  public msg_props = {
    name : null,
    email: null,
    subject: null,
    message: null
  }

  constructor() { }

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

  send_message() {
    alert(this.msg_props.name);
  }

}
