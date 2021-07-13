import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
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
