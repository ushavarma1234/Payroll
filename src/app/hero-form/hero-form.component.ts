import { Component } from '@angular/core';


import { Hero } from './hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

 
city="huyderabad";


myFunction()
{
  alert("form submitted")
}




}


