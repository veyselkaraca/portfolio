import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ProjectsService } from './services/projects.service';
import {environment} from "../environments/environment"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="portfolio-template"
  constructor( public _infoPageService: InfoPageService,
               public _projectsService:  ProjectsService ) {
                 console.log(environment.mode)
                }
}
