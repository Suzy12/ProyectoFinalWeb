import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UploadService { 
    SERVER_URL: string = "gs://proyecto-web-36a12.appspot.com/";
    headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    constructor(private httpClient: HttpClient) {
     }

    public upload(formData) {
      return this.httpClient.post<any>(this.SERVER_URL, formData, {
        headers: this.headers,
        withCredentials: false,
        reportProgress: true,
        observe: 'events'
      });
      }
}
