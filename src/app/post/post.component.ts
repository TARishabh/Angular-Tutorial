import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title: string = 'Post Title';

  @Input() fromParent!:string ;

  message:string = "Hello from child";

  childMessage:string = "From Child Component";

  outputChildMessage: string = 'Message from child via Output';

  postTitle!:string
  postContent!:string
  postImageUri!:string
  postUrl!:string
  addBackgroundColor!:boolean

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }

  onKeyUp(){}

}
