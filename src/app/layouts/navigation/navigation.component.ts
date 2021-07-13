import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations:  [
    trigger('slideInOut', [
      state('0', style({
          height: '0px'
      })),
      state('1', style({
          height: '*', padding: "2rem"
      })),
      transition('1 => 0', animate('200ms ease-out')),
      transition('0 => 1', animate('200ms ease-in'))
      ]),
  ]
 
})
export class NavigationComponent implements OnInit {
  hamburgerOpen = false;
  menu= [
    {
      name:'Home',
      url: '/main/dashboard',
      active: true,
    },
    {
      name:'Merchants',
      url: '/main/merchants',
      active: false,
    },
    {
      name:'FAQs',
      url: '/main//faqs',
      active: false,
    },
    {
      name:'Repayment',
      url: '/main//repayment',
      active: false,
    },
    {
      name:'Contacts',
      url: '/main/contacts',
      active: false,
    }
 ]
  public isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleHamburger(): void {
    this.isOpen = !this.isOpen;
    document.body.style.overflowY = this.isOpen ? 'hidden' : 'auto';
  }
}
