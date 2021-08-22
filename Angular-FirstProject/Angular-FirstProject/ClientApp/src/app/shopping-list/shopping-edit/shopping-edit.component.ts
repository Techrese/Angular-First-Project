import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import * as EventEmitter from 'events';
import { Ingredient } from '../../Shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {


  }


  onAddItem() {

    const newIngredient = new Ingredient("test", 1);
    this.slService.addIngredient(newIngredient);

  }


}


