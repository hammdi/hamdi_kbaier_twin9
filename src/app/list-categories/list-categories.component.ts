import { Component } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  name='jhon weekend';
  addToCart=0;
  decrementCardValue(){if(this.addToCart!=0)this.addToCart--;}
  incrementCardValue(){if (this.addToCart<this.products.stock)this.addToCart++;}
  products={
image: "assets/images/categorie_electromenager.jpg",
nom: "Grand électroménager",
  stock: 4,}
  getID(){return '02'}
  onNameChange(event: any){
    this.name = event.target.value;
    //console.log(event.target.value);
  }
}
