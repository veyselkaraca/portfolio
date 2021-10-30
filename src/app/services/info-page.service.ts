import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;
  profile: any[] = [];
  skills:any[]=[];
  constructor(private http: HttpClient) {

    this.loadInfo();
    this.loadProfile()
    this.loadSkills()
  }

  private loadInfo() {
    this.http.get('./assets/data/data.page.json')
      .subscribe((resp: InfoPage) => {
        this.loaded = true;
        this.info = resp;
      });
     
  }
  private loadProfile() {
    this.http.get('./assets/data/person.json')
      .subscribe((resp: any[]) => {
        this.profile = resp
      });
  }
  private loadSkills(){
    this.http.get("./assets/data/skills.json")
    .subscribe((resp:any[])=>{
      this.skills=resp
    })
  }

}
