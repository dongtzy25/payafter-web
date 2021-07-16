import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('InterestTrigger', [
      transition( ':enter', [
        query( '*', stagger( '100ms', [
              animate(  '1s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
              keyframes([
                style({ opacity: 0}),
                style( { opacity: 1}),
              ]))
          ]), { optional: true }, ),
      ] )
    ]),
    trigger('LogoTrigger', [
        transition(':enter', [
          style({transform: 'translateX(-300px)'}), 
          animate('1s cubic-bezier(0.250, 0.460, 0.450, 0.940)')
        ],
        { params: { delay: 200 } }
    )]),
 
  ]
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
 
  }

}
