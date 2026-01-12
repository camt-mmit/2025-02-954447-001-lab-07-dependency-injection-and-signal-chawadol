import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Contact } from '../../types';
import { DisplayTel } from '../display-tel/display-tel';

@Component({
  selector: 'app-display-contact',
  imports: [DisplayTel],
  templateUrl: './display-contact.html',
  styleUrl: './display-contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayContact {
  readonly contacts = input.required<readonly Contact[]>();
}
