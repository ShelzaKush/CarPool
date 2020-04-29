import { Component,ViewChildren, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css']
})
export class PassengerInfoComponent implements OnInit {
  form: FormGroup;
  formInput = ['input1', 'input2', 'input3', 'input4'];
  @ViewChildren('formRow') rows: any;

  constructor() {  this.form = this.toFormGroup(this.formInput);}

  ngOnInit(): void {
  }
  toFormGroup(elements) {
    const group: any = {};

    elements.forEach(key => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

  keyUpEvent(event, index) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
      pos = index - 1 ;
    } else {
      pos = index + 1 ;
    }
    if (pos > -1 && pos < this.formInput.length ) {
      this.rows._results[pos].nativeElement.focus();
    }

  }

  onSubmit() {
    console.log(this.form.value);
  }

}
