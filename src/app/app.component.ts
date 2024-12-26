import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-tutorial';
  parentMessage = "message from parent";
  message! :string;
  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  postArray:string[] = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

  objArray = [
    {name: 'Post 1', content: 'Content 1'},
    // {name: 'Post 2', content: 'Content 2'},
    // {name: 'Post 3', content: 'Content 3'},
    // {name: 'Post 4', content: 'Content 4'},
    // {name: 'Post 5', content: 'Content 5'}
  ]

  objArrayLength = this.objArray.length;
  userName!:string;

  condtionalBool: boolean = true;

  users!: string[] 

  @ViewChild(PostComponent) postComponent!: PostComponent;

  constructor (private userService: UserService) {
    console.log(this.postComponent);
    // for (let i=0; i<this.postArray.length; i++) {
      //   console.log(this.postArray[i]);
      // }
      this.users = this.userService.users;
      console.log(this.objArray.length);
  }

  ngAfterViewInit() {
    console.log(this.postComponent);
    this.message = this.postComponent.childMessage;
  }

  receiveMessage($event:any){
    console.log($event);
  }

  onClick() {
    console.log('Button Clicked');
    this.condtionalBool = !this.condtionalBool;
  }
  
  onKeyUp(){
    console.log(this.userName);
  }

  onClickAddPost(){
    this.objArray.push({name: `Post ${this.objArrayLength + 1}`, content: `Content ${this.objArrayLength + 1}`});
    this.objArrayLength += 1;
  }
  DeletePostObj(post:any){
    this.objArray = this.objArray.filter(obj => obj !== post);
  }

  step!:string;
  onClickStep(step:string){
    this.step = step;
  }
}
