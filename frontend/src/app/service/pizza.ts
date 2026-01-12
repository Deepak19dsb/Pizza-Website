import { Injectable, signal ,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizzax,IngredientItem} from './pizzamodel/pizzamodel';

@Injectable({
  providedIn: 'root'
})


export class Pizza {

  private _items = signal<Pizzax[]>([]);
  items = this._items.asReadonly();

  private _ingredients = signal<IngredientItem[]>([]);
  ingredients = this._ingredients.asReadonly();

  ingred_cost=signal<number>(0.0);
  len=signal<number>(0);
  pizza_cost=signal<number>(0);
  total=signal<number>(0.00);

  private http=inject(HttpClient);
  url = 'http://localhost:8000/pizza';
  url1 = 'http://localhost:8000/ingredients';

  getpizza() {
    return this.http.get<Pizzax[]>(this.url);
  }

  getingredients() {
    return this.http.get<IngredientItem[]>(this.url1);
  }
  
  setItems(data: Pizzax[]) {
    this._items.set(data);
  }

  setIngredients(data: IngredientItem[]) {
    this._ingredients.set(data);
  }
  toggle_ingredients(id:number){

   
    this._ingredients.update(
    items => items.map(p => p.id === id ? { ...p, isSelected: !p.isSelected } : p ) );

   const sum = this._ingredients()
    .filter(i => i.isSelected)
    .reduce((acc, i) => acc + i.price, 0);
    this.ingred_cost.set(sum);
  
      this.total.set(this.ingred_cost()+this.pizza_cost());
  }
 
  decr(id:number){
this._items.update(
  items=>items.map(p=>{
    if(p.id===id){
      if(p.quantity==1){
        return {
          ...p,isSelected:true
        }}
        else{
        return {
          ...p,quantity:p.quantity-1
          
        }
      }
  }
  return p;}));

 const sum = this.items()
    .filter(i => !i.isSelected)
    .reduce((acc, i) => acc + i.price*i.quantity, 0);
    this.pizza_cost.set(sum);

        this.total.set(this.ingred_cost()+this.pizza_cost());


         const sm = this.items()
    .filter(i => !i.isSelected)
    .reduce((acc) => acc + 1, 0);
    this.len.set(sm);
  }



incr(id:number){
this._items.update(
  items=>items.map(p=>p.id===id?{
    ...p, quantity:p.quantity+1}:p));
 const sum = this.items()
    .filter(i => !i.isSelected)
    .reduce((acc, i) => acc + i.price*i.quantity, 0);
    this.pizza_cost.set(sum);

        this.total.set(this.ingred_cost()+this.pizza_cost());


  }



  delete(id:number){
     this._items.update(
      x=>x.map(x=>x.id===id?{
    ...x,quantity:0,isSelected:true}:x))
      
     const sum = this.items()
    .filter(i => !i.isSelected)
    .reduce((acc, i) => acc + i.price*i.quantity, 0);
    this.pizza_cost.set(sum);
 this.total.set(this.ingred_cost()+this.pizza_cost());

  const sm = this.items()
    .filter(i => !i.isSelected)
    .reduce((acc) => acc + 1, 0);
    this.len.set(sm); 

    }
  


  toggle(id: number) 
  { 
   
    this._items.update(items =>
    items.map(p => {
      if (p.id !== id) return p;

      if (p.isSelected) {
        // selecting item → increase quantity
        return {
          ...p,
          isSelected: false,
          quantity: p.quantity + 1
        };
      } else {
        // deselecting item → decrease quantity
        const newQty = p.quantity - 1;

        return {
          ...p,
          quantity: Math.max(newQty, 0),
          isSelected: newQty <= 0
        };
      }
    })
  );




 

    const sum = this.items()
    .filter(i => !i.isSelected)
    .reduce((acc) => acc + 1, 0);
    this.len.set(sum);

     const su1 = this.items()
    .filter(i => !i.isSelected)
    .reduce((acc, i) => acc + i.price*i.quantity, 0);
    this.pizza_cost.set(su1);

    this.total.set(this.ingred_cost()+this.pizza_cost());
  }













  }

