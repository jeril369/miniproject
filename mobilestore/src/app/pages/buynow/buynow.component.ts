import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/hero.service';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent {
  constructor(private dis :HeroService,private router : Router){}
  data=this.dis.getdata();
  
  buynow=this.dis.getdata();
  gotoHere(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/single'])
}
}
