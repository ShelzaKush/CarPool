import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';

const MaterialComponents =[
  MatButtonModule, MatListModule,MatCardModule,MatInputModule,MatFormFieldModule,MatRadioModule
];

@NgModule({

  imports: [MaterialComponents
    
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
