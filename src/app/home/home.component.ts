import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: Date = new Date();
  projects: Project[] = [
    {
      name: 'Evaluation Engine', image: 'assets/EvalEngine.png', desc: 'Developed on Java 11 on Spring Microservices, Angular 10 and MongoDB, ' +
        'An application that evaluates student’s projects submitted during exams and awards them with their deserved marks. ' + ' This is a versatile tool that can evaluate Java-based, Spring-based, Angular-based or React-based projects on its own. ' +
        'On a 4GB RAM computer, this tool can evaluate an average of 100 student projects in 25 mins and is more efficient on powerful computers.' + ' After evaluation, it also generates a local excel file for a detailed report of the evaluation.', demo: '', source: ''
    },
    {
      name: 'Trackit', image: 'assets/dashboard.png', desc: 'A dashboard application to see all the data related to the education dept. Of Infosys. ' +
        'Based on Java 11 on Spring Microservices, Angular Material with Angular 10, MySQL and MongoDB.' +
        ' A go-to place where an educator, a manager or a student can see data related to themselves and their subordinates.'+
        '  Since this application handles huge amounts of data, the data processing and optimization were done using Talend.',
      demo: '', source: ''
    },
    {
      name: 'Verification Tool', image: 'assets/VTool.png', desc: 'A plug-and-use .jar application that helps trainees during exams. ' +
        'Based on Java 11 on Spring Boot, Angular 11. ' +
        'Just compile the .jar file and it will trigger an automatic UI that gives a detailed report of the trainee’s coded project. ' + 
        'It uses custom-made reporters to generate any Angular project’s detailed reports',
      demo: '', source: ''
    }
  ];

  showScrollButton = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.showScrollButton = window.pageYOffset > 500;
  }

  moveToTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    window.scroll()
  }
}
