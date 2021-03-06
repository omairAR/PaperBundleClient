import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseGetService {

  constructor(public afs: AngularFirestore) { }

  getUsers(){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('paperbundle').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }
}
