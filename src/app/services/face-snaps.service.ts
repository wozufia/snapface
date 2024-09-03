import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [new FaceSnap(
        "kodjo",
        "mon grand frère",
        "assets/channels4_profile.jpg",
        new Date(),
        0
      ),
      new FaceSnap(
        "mimi",
        "ma petite soeur",
        "assets/darkwood.jpg.webp",
        new Date('1994-01-09'),
        150
      ).withLocation('Togo')
    ];
    
    getFaceSnaps(): FaceSnap[] {
      return [...this.faceSnaps];
    }
    getFaceSnapById(faceSnapid: string): FaceSnap{
      const foundFaceSnap : FaceSnap | undefined = this.faceSnaps.find((faceSnap : FaceSnap) => faceSnap.id ===faceSnapid);
      if(!foundFaceSnap ){
        throw new Error("aucun faceSnap n'a été trouvé avec cet ID");
      }
      return foundFaceSnap;

    }
    setFaceSnaps(faceSnaps: FaceSnap[]): void{
      this.faceSnaps = faceSnaps;
    }
    snapFaceSnapById(faceSnapid: string): void{
      const foundFaceSnap = this.getFaceSnapById(faceSnapid);
      foundFaceSnap.snap();
    }
    unsnapFaceSnapById(faceSnapid: string): void{
      const foundFaceSnap = this.getFaceSnapById(faceSnapid);
      foundFaceSnap.unsnap();
    }
}