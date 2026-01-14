import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-number',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dynamic-number.html',
  styleUrl: './dynamic-number.scss',
})
export class DynamicNumberComponent {
  readonly value = model<number>(0);
  readonly remove = output<void>();
}
