import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';

//Here we are going to store components,that they are initialized just once(example: navigation, footer, some global loader)

@NgModule({
  declarations: [
    GlobalLoaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserModule
  ],
  exports: [GlobalLoaderComponent]
})
export class CoreModule { }
