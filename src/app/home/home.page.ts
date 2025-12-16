import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonInput } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonIcon, FormsModule, IonInput,
    RouterLink,
    
  ],
})
export class HomePage {

ingredients: string = '';

  searchRecipes() {
    // Split by commas, trim spaces
    const ingredientList = this.ingredients
      .split(',')
      .map(i => i.trim())
      .filter(i => i.length > 0);

    console.log('Searching recipes with:', ingredientList);
    // Here you can call your recipe API or service
  }
}

