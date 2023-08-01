import { Component } from '@angular/core';
import { GlobalLoaderService } from './global-loader.service';

// this component is core component, it-s mean that he is initialized(istanzira) just once, when applications starts and is for all application,
//and  every time is called in the application, for every change in the application he triggers(executing) and doing some things
//i sega , za da moje da se izpolzva v celiq application, trqbva a app.html, da slojim negoviq html selector app-global-loader,
//no su6to i da importirame negoviq module (core module) v app-modula, i da ne zabravim da go exportnem oba4e ot module,tozi  global loader component
@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.css'],
})
export class GlobalLoaderComponent {
  constructor(public globalLoaderService: GlobalLoaderService) {
    
  }
}
