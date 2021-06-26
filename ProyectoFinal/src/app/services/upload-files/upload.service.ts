import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(
    private storage: AngularFireStorage
  ) { }

  //Tarea para subir archivo
  public uploadCloudStorage(key:string, nombreArchivo: string, datos: any) {
    return this.storage.upload(key+"/"+nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenceCloudStorage(key:string, nombreArchivo: string) {
    return this.storage.ref(key+"/"+nombreArchivo);
  }
}