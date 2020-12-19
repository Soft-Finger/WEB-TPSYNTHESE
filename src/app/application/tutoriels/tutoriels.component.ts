import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tutoriels',
  templateUrl: './tutoriels.component.html',
  styleUrls: ['./tutoriels.component.css']
})
export class TutorielsComponent implements OnInit {

  myParametre: number;

  constructor(private route: ActivatedRoute, private routeur: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(myMap => {
      this.myParametre = myMap.id;
    });
  }

  

}