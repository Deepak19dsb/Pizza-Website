import { Component, OnInit ,inject} from '@angular/core';
import { Pizza } from '../service/pizza';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-list',
  imports: [ FormsModule, RouterLink , CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit{
  public Data=inject(Pizza);
  
  ngOnInit(){
      if (this.Data.ingredients().length > 0) {
    return; }
    this.Data.getingredients().subscribe({
      next:(x)=>{
        
        this.Data.setIngredients(x);
       
  },
  error:(err)=>{
console.log(err);
  }
})
  }

}
