import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonRadio ,IonLabel ,IonRadioGroup ,IonListHeader ,IonList ,IonItem ,IonCard, IonCardContent, IonCardHeader ,IonIcon ,IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { SettingService } from '../services/setting-service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    RouterLink, IonIcon, IonCard, IonCardContent, IonCardHeader, IonItem, IonList,
    IonListHeader, IonRadioGroup, IonLabel, IonRadio 
  ]
})
export class SettingsPage implements OnInit {
// Property to store the current unit system (Metric or Imperial).
// Default value is 'Metric'.
unitSystem: 'Metric' | 'Imperial' = 'Metric';

// Constructor injects the SettingService, which manages app settings.
  constructor(private settings: SettingService) {}

  ngOnInit() {
// Retrieve the saved unit system from SettingService.
  // and set it to the local unitSystem property.
    this.unitSystem = this.settings.getUnitSystem();
  }

// Method called when the user changes the unit system in the UI.
  changeUnitSystem(value: 'Metric' | 'Imperial') {
    // Update the unit system in SettingService.
    this.settings.setUnitSystem(value);
    // Update the local property to reflect the new value
    this.unitSystem = value;
  }
}

