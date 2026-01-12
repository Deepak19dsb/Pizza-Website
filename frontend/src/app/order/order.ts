import { Component, OnInit,inject } from '@angular/core';
import { Pizza } from '../service/pizza';
import { Ingredient, Topping } from '../service/pizzamodel/pizzamodel';



@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements OnInit {
  
  public data=inject(Pizza);
  ngOnInit(): void {
    if (this.data.items().length > 0) {
    return; 
  }
    this.data.getpizza().subscribe({
      next: (x) => {
        const transformed = x.map(p => ({
          ...p,
          ingred: p.ingredients?.map((i: Ingredient) => i.name).join(', '),
          tops: p.topping?.map((t: Topping) => t.name).join(', ')
        }));

        
        this.data.setItems(transformed);
      },

      error: (err) => console.log(err)
    });
  }
}
