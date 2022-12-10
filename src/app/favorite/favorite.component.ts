import { Component, OnInit,Input,Output,EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite:boolean;
  @Output() change= new EventEmitter();
  encapuslation: ViewEncapsulation.Emulated
  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
  
    this.isFavorite=!this.isFavorite;
    this.change.emit(this.isFavorite);
  }
  
}
