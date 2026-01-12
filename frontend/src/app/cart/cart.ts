import { Component,inject } from '@angular/core';
import { Pizza } from '../service/pizza';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

public pizzaService=inject(Pizza);
show=false;
show_ingred(){
  this.show=!this.show;
}
  refreshPage(){
    if(this.pizzaService.ingred_cost()===0 && this.pizzaService.pizza_cost()===0){

      alert("Add pizza first");
      return;
    }
    alert("Thanks for buying the pizza");
    window.location.reload();
  }
  clear(){
    window.location.reload()
  }
};



