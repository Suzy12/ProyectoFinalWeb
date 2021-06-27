import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  folder: string = "attached_files/";

  constructor(
    private storage: AngularFireStorage
  ) { }

  //Tarea para subir archivo
  public uploadCloudStorage(key: string, nombreArchivo: string, datos: any) {
    return this.storage.upload(this.folder + key + "/" + nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenceCloudStorage(key: string, nombreArchivo: string) {
    return this.storage.ref(this.folder + key + "/" + nombreArchivo);
  }

  public deleteFiles(files: any) {
    files.array.forEach(file => {
      let storageReference = this.storage.refFromURL(file.url);
      storageReference.delete().subscribe((msg) => {
        console.log(msg);

      });
    });
  }

  public countFilesCloudStorage() {
    let storageRef = this.storage.ref(this.folder);
    let count = 0

    let count_items_promise = 0;
    return new Promise((resolve, reject) => {
      storageRef.listAll().forEach((result) => {
        count += result.items.length;
        result.prefixes.forEach((ref) => {
          ref.listAll().then((element) => {
            count += element.items.length;
            count_items_promise++;
            if (count_items_promise == result.prefixes.length) {
              resolve(count);
            }
          })
        });
      })
    });
  }
}
