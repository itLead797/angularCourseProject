import { Component, OnInit } from '@angular/core';
import { Recipe } from '@app-models/Recipe.model';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipies: Recipe[] = [
  {
    name: 'A Test Recipe',
    description: 'This is a test',
    imagePath: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'
  },
  {
    name: 'A Test Recipe1',
    description: 'This is a test',
    imagePath: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
