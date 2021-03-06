import { Component, Input, OnInit } from '@angular/core';
import {  Post } from 'src/db/Classes/PostClass';
import {CommentClass} from '../../db/Classes/CommentClass';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() post?: Post;
  commentText: string;
  constructor(){
    this.commentText = '';
  }


  ngOnInit(): void {
    for (let tag of this.post!.tags){
      console.log(tag)
    }
  }

  async addComment(){
    console.log("post id = "+ this.post?.PID)
    let nc = new CommentClass(this.commentText, this.post?.authorID, this.post?.PID);
    await nc.upload();
    console.log("succesfully uploaded comment")
    // @ts-ignore
    if(!this.post?.comments){
      // @ts-ignore
      this.post?.comments = [];
    }
    this.post?.comments?.push(nc)
  }

}
