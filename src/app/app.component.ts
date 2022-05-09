import { Component } from '@angular/core';


//added
import { Observable } from 'rxjs';

//custom
import { FormField } from './model/form-field';
import { FormfieldControlService } from './services/formfield-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormfieldControlService]
})
export class AppComponent {
  title = 'formTest';
  formFields: Observable<FormField<any>[]>;
  constructor(serviceForm: FormfieldControlService) {
    this.formFields = serviceForm.getFormFields();
  }
}
