import { Component } from '@angular/core';
import { FormControlComponent } from "../../../shared/form-control/form-control.component";
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ ButtonComponent,FormControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
