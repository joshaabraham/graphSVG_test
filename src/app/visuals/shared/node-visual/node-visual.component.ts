import { Component, Input } from '@angular/core';
import { Node } from '../../../d3';

@Component({
  selector: '[nodeVisual]',
  template: `
  <ng-container *ngFor="let i of items; let k=index">
  
          <div *ngIf="!i">
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                [style.fill]="node.color"
                cx="0"
                cy="0"
                width="24px"
                height="24px">
              <path d="M 12 2 C 12 2 8 3 8 7 C 8 9.209 9.791 11 12 11 C 14.209 11 16 9.209 16 7 C 16 4.357 13.817 3.5019531 13 3.5019531 L 12 2 z M 12 14 C 8.996 14 3 15.508 3 18.5 L 3 21 L 21 21 L 21 18.5 C 21 15.508 15.004 14 12 14 z"
                    fill="node.color" />
            </svg>
          </div>

          <div *ngIf="i">
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                [style.fill]="node.color"
                cx="0"
                cy="0"
                width="24px"
                height="24px">
              <path d="M 12 2 C 12 2 8 3 8 7 C 8 9.209 9.791 11 12 11 C 14.209 11 16 9.209 16 7 C 16 4.357 13.817 3.5019531 13 3.5019531 L 12 2 z M 12 14 C 8.996 14 3 15.508 3 18.5 L 3 21 L 21 21 L 21 18.5 C 21 15.508 15.004 14 12 14 z"
                    fill="node.color" />
            </svg>
          </div>

      </ng-container>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {

  isPlanned: boolean = false;
  items = [true, false, true, false];

  @Input('nodeVisual') node: Node;


/*

     <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               [style.fill]="themeSelectorService.companyThemeBo.bckColor"
               width="24px"
               height="24px">
            <path d="M 12 2 C 12 2 8 3 8 7 C 8 9.209 9.791 11 12 11 C 14.209 11 16 9.209 16 7 C 16 4.357 13.817 3.5019531 13 3.5019531 L 12 2 z M 12 14 C 8.996 14 3 15.508 3 18.5 L 3 21 L 21 21 L 21 18.5 C 21 15.508 15.004 14 12 14 z"
                  fill="themeSelectorService.companyThemeBo.bckColor" />
          </svg>
*/


/*
  <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle
          class="node"
          [attr.fill]="node.color"
          cx="0"
          cy="0"
          [attr.r]="node.r">
      </svg:circle>
      <svg:text
          class="node-name"
          [attr.font-size]="node.fontSize">
        {{node.id}}
      </svg:text>
    </svg:g>

*/


}
