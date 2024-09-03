import { Component,Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { DatePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap; 
  buttonMsg!:string;
  isSnaped!: Boolean;
  constructor( 
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.buttonMsg = "Oh snaps!"
    this.isSnaped = false
  }
  onSnap(): void {
    if(this.isSnaped){
      this.faceSnapsService.unsnapFaceSnapById(this.faceSnap.id);
      this.buttonMsg = "Oh snaps!";
      this.isSnaped = false;
    }
    else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.buttonMsg = "Oops unsnaps!";
      this.isSnaped = true;
    }
  }
  onViewFaceSnap(){
    console.log(this.faceSnap.id);
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
