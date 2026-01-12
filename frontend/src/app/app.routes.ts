import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { List } from './list/list';
import { Order } from './order/order';
import { Home } from './home/home';


export const routes: Routes = [
    {path:'', component:Home},
    
    {path:'cart' , component:Cart},
     {path:'list' , component:List},
      {path:'order' , component:Order},
      {path:"**" , redirectTo:''}
];
