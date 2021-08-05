import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'simple test', 'https://www.maxpixel.net/static/photo/1x/Meat-Recipe-Duck-Tasty-Fry-Food-Duck-Breast-4813261.jpg'),
    new Recipe('A test recipe', 'simple test', 'https://www.maxpixel.net/static/photo/1x/Meat-Recipe-Duck-Tasty-Fry-Food-Duck-Breast-4813261.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
