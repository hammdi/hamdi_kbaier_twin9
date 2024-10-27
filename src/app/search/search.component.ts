import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchtext:string="";
@Output()
SearchTextChanged:EventEmitter<string> = new EventEmitter<string>();
onSearchTextChanged(){
  this.SearchTextChanged.emit(this.searchtext);}
  setSearchText(value:string){
  this.searchtext=value;

  }
UpdateSearchText(event : any){this.searchtext= event.target.value;}
  @Input()
  titre : string = "";

}
