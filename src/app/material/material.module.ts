import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';





const MaterialComponents =[
  MatButtonModule, MatListModule,MatCardModule,MatInputModule,MatFormFieldModule,MatRadioModule,MatDatepickerModule,
  
  MatNativeDateModule, 
  
];

@NgModule({

  imports: [MaterialComponents
    
  ],
  exports:[MaterialComponents],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class MaterialModule { }
