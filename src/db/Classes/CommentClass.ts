import Api from "./Api"
import {getComments} from "src/db/Classes/Api"
import {createComment, updateComment} from "src/db/Classes/Api"

var last_ind=0;
export class CommentClass{
  CID!: string;
  body!: string;
  authorID: number;
  date!: Date;
  subComment:Boolean | undefined;
  replyingTo!: Number;
  visableToAll!: boolean;
  visableTo!: Array<number>;
  callerID: number;


  constructor(callerID=-1, body="",authorID=-1,replyingTo=-1, CID =-1){
    if(CID == -1){
     this.CID= getCID();
    }
    this.date=new Date()
    this.authorID =authorID;
    this.visableToAll=true;
    this.callerID = callerID;
  }

  upload(){
    return createComment(this);
  }
  
  update(){
    return updateComment(this);
  }

  delete(){
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/delete_comment?'+this.CID;
    let res = $.getJSON(getPostURL)
    return res;
  }
}
function getCID(): string {
  var rt = last_ind.toString();
  last_ind++;
  return rt;
}
