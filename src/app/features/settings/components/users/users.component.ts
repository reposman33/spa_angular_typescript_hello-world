import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'settings-users',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class UsersComponent {

}
