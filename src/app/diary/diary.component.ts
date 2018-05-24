import { Component, OnInit } from '@angular/core';
import {Diary} from '../diary'


@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaries = [
    new Diary(1,'Excited Today','For no resaon ', new Date(2018,3,14)),
    new Diary(2,'Unmotivated much','self motivation does not always work', new Date(2018,3,14)),
    new Diary(2,'Feeling meh','lorem ipsum', new Date(2018,3,14)),


  ]

  addNewDiary(diary){
    let diaryLength = this.diaries.length;
    diary.id=diaryLength+1;
    diary.completeDate = new Date(diary.completeDate)
    this.diaries.push(diary)

}

completeDiary(isComplete,index){
  if(isComplete){
    let toComplete = confirm('Are you sure you want to delete?')
    if(toComplete){
      this.diaries.splice(index,1)
    }
    // this.diaries.splice(index,1);
  }
}

  constructor() { }

  ngOnInit() {
  }

}
