import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public name: any[] = [
    {
      name: 'Home',
      icon: '🏚',
    },
    {
      name: 'Search',
      icon: '✨',
    },
    {
      name: 'Explore',
      icon: '🌏',
    },
    {
      name: 'Reels',
      icon: '🎁',
    },
    {
      name: 'Messages',
      icon: '💌',
    },
    {
      name: 'Notifications',
      icon: '🔉',
    },
    {
      name: 'Create',
      icon: '🥈',
    },
    {
      name: 'Profile',
      icon: '👮',
    },
    {
      name: ' ',
      icon: ' ',
    },
    {
      name: 'More',
      icon: 'Ξ ',
    },
  ];
  result (){
    return this.name
  }
  constructor() {}
}
