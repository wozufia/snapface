import { Component, OnInit } from '@angular/core';
import { DatePipe, NgClass, NgStyle, TitleCasePipe} from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap; 
  buttonMsg!:string;
  isSnaped!: Boolean;
  constructor( 
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.buttonMsg = "Oh snaps!";
    this.isSnaped = false;
    const faceSnapId = this.route.snapshot.params['id'];
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
}
