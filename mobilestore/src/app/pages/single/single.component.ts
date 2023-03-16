import { Component } from '@angular/core';
import { HeroService } from 'src/hero.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  s:any
  constructor(private hero:HeroService){}
  ngOnInit():void{
  let id=localStorage.getItem('id')
  let singleDataArray =this.hero.getdata()
  console.log(singleDataArray);
  this.s=singleDataArray.filter(e=>e.District===id)
  console.log(this.s)

}
}
