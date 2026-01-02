import { Component } from '@angular/core';
import {IonCardContent, IonCardTitle, IonCardHeader, IonSearchbar, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonInput } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';
import { Spoonacular } from '../services/spoonacular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonIcon, FormsModule, IonCardHeader,
    RouterLink, IonCard, IonSearchbar, CommonModule,
IonCardTitle, IonCardContent,
  ],
})
export class HomePage {
//Propety bound to the serch bar input.
ingredients: string = '';
//Array to hold recipe results returned from the API.
recipes: any[] = [];

//Spoonacular service injection.
constructor(private recipeService: Spoonacular){}

//Method triggered when "Search" is clicked.
  searchRecipes() {
    //Convert the ingredients entered in a clean list:
    //-Split by commas, -trim spaces and -filter out empty values.
    const ingredientList = this.ingredients
      .split(',')
      .map(i => i.trim())
      .filter(i => i.length > 0);
//Call the Spoonacular service to serch recipes by ingredients. 
  this.recipeService.searchRecipes(this.ingredients).subscribe((data:any)=>{
    //Store the results in the recipes array.
    this.recipes = data.results; 

 console.log('Recipes found:', this.recipes);
});
}
}

