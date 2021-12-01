import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  gifs =  new BehaviorSubject<any>([]);
  constructor(
    private http: HttpClient
  ) { }
  getTrendingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=50`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
  }
  searchGiphs(giphName:string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${giphName}&api_key=${environment.giphyApiKey}&limit=50`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
  }
  getGifs(){
    return this.gifs.asObservable();
  }
}
