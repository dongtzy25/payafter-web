import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('LogoTrigger', [
        transition(':enter', [style({transform: 'translateX(-300px)'}), animate('0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940)')]
    )]),
    trigger('InterestTrigger', [
      transition( ':enter', [
        query( '*', stagger( '0.5s', [
              animate( '1s cubic-bezier(0.390, 0.575, 0.565, 1.000)', keyframes([
                style( { opacity: 0}),
                style( { opacity: 1}),
              ]))
          ]), { optional: true} ),
      ] )
  ]),
 
  ]
})
export class DashboardComponent implements OnInit {
  
  items = [{ img: 'https://picsum.photos/200/200?random=1' },
  { img: 'https://picsum.photos/200/200?random=2' },
  { img: 'https://picsum.photos/200/200?random=3' },
  { img: 'https://picsum.photos/200/200?random=4' },
  { img: 'https://picsum.photos/200/200?random=5' },
  { img: 'https://picsum.photos/200/200?random=6' },
  { img: 'https://picsum.photos/200/200?random=7' },
  { img: 'https://picsum.photos/200/200?random=8' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
