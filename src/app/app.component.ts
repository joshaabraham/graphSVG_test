import { Component } from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  planned = true;
  tab_location = [false, true, false, true];


  line_width = 90;
  line_height = 25;

  square_width = 50;
  square_height = 50;


  observable = new Observable(sub => {
    sub.next('yo'); //valeur que je renvoie // l'operation qui renvoit une novuelle valeur // je devenit celle que j'ecoute
    setTimeout(() => {
      sub.next('blablab');
    }, 1000);
  });



  mafunction() {
    this.observable.subscribe({
      next(valeur) { console.log(valeur); },  //c'est l'implementation de ce que je fait avec la valeur retourner
      error(err) { },
      complete() { }
    });
  }

  // attr.x1 lign
  attr_x1_forLine(index: number): number {
    return index * (this.square_width + this.line_width);
 }


}

/*
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = APP_CONFIG.N,
      getIndex = number => number - 1;


    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {

        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        this.links.push(new Link(i, i * m));
      }
    }
  }
*/
