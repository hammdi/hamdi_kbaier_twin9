import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  @Input()
  pc:{id:number,title:string,image:string,available:boolean,description:string}= undefined;
  protected readonly alert = alert;
}
