import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-section',
  templateUrl: './works-section.component.html',
  styleUrls: ['./works-section.component.scss']
})
export class WorksSectionComponent implements OnInit {

  slides = [
    {
      src: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      bg: "background: url('/assets/images/Card1.png')center center no-repeat;background-size:cover;"
    },
    {
      src: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      bg: "background: url('/assets/images/Card2.png')center center no-repeat;background-size:cover;"
    },
    {
      src: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      bg: "background: url('/assets/images/Card3.png')center center no-repeat;background-size:cover;"
    },
    {
      src: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      bg: "background: url('/assets/images/Card1.png')center center no-repeat;background-size:cover;"
    },
    {
      src: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      bg: "background: url('/assets/images/Card2.png')center center no-repeat;background-size:cover;"
    },
    {
      src: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      bg: 
      "background: url('/assets/images/Card3.png') center center no-repeat;background-size:cover; "
    },
    {
      src: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      bg: "background: url('/assets/images/Card1.png')center center no-repeat;background-size:cover;"
    },
   
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
