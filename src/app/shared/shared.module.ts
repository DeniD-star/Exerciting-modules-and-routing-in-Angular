import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { UserModule } from '../user/user.module';

//In Shared module we are going to have everything that we are going to reuse, like buttons, spinners, loaders, pop-up
//so, everything that can be shared or called by many places, many components

//I sega, ako iskame da izpolzvame tozi spinner, kato globalen, trqbva da go exportnem ot modula koitoe toi,a imenno shared modula, da go importnem v modula v koito iskame da go izpolzvame, i tova e core modula
//Razbira se izpolzvame negoviq selektor v html faila na componenta, v koito 6te go izpolzvame, global-loader.html

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SpinnerComponent]
})
export class SharedModule { }
