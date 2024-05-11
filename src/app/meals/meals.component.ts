import { Component, Input } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {
  @Input() meal: Meal;
 

  displayMealDescription(description: string){
    alert(description);
  }
}
