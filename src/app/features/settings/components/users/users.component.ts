import { Component, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'settings-users',
  standalone: true,
  imports: [SharedModule,MatInputModule,MatFormFieldModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class UsersComponent {

}
