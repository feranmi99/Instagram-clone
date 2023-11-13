import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( public name:ServiceService){};
  
  public navList:any = []
  public list = [1,2,3,4,5,6,7,8,9];
  public lists = [1,2,3,4,5,6,7]
  public follower = [1,2,3,4]
  // console.log(this.name);

  ngOnInit(){
    console.log(this.name.result());
    this.navList = this.name.result();    
    
  }
  

}
