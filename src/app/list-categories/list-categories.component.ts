import {Component} from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  name = 'jhon weekend';
  addToCart = 0;

  getID() {
    return '02'
  }

  onNameChange(event: any) {
    this.name = event.target.value;
    //console.log(event.target.value);
  }

  decrementCardValue() {
    if (this.addToCart != 0) this.addToCart--;
  }

  incrementCardValue() {
    if (this.addToCart < this.products.stock) this.addToCart++;
  }

  products = {
    image: "assets/images/categorie_electromenager.jpg",
    nom: "Grand électroménager",
    stock: 4,
  }
  listPro = [{
    "id": 1, "title": "Grand électroménager",
    "image": "assets/images/categorie_electromenager.jpg", "description": "aaaa",
    "available": true
  },
    {
      "id": 2, "title": "Petit électroménager",
      "image": "assets/images/categorie_petit_electromenager.jpg", "description": "bb",
      "available": true
    },
    {
      "id": 3, "title": "Produits informatiques",
      "image": "assets/images/categorie_produits_informatiques.jpg", "description": "c",
      "available": true
    },
    {
      "id": 4, "title": "Smart Phones", "image": "assets/images/categorie_smartPhone.jpg",
      "description": "dddd", "available": true
    },
    {
      "id": 5, "title": "TV, images et son",
      "image": "assets/images/categorie_tv_image_son.jpg", "description": "eeee",
      "available": true
    },
    {
      "id": 6, "title": "Produits voiture", "image": "assets/images/produits_nettoyages.jpg",
      "description": "vvvvv", "available": false
    },
  ]
  totalProduct = this.listPro.length;
  totalStock = this.listPro.filter(p => p.available).length;
  totalOutStock = this.listPro.filter(p => !p.available).length;
  selectedfilter: string = 'all';

  onFilterChanged(value: string) {
    console.log('filter changed to ',value);
    this.selectedfilter = value;
  }
}
