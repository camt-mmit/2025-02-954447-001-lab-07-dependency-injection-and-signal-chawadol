import { Component, model, computed, output } from '@angular/core';
import { DynamicNumberComponent } from '../dynamic-number/dynamic-number';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [DynamicNumberComponent],
  templateUrl: './dynamic-section.html',
  styleUrl: './dynamic-section.scss',
})
export class DynamicSectionComponent {
  readonly numbers = model<number[]>([]);
  readonly index = model<number>(0);
  readonly removeSection = output<void>();

  readonly result = computed(() => {
    return this.numbers().reduce((sum, curr) => sum + curr, 0);
  });

  addNumber() {
    this.numbers.update((nums) => [...nums, 0]);
  }

  removeNumber(idx: number) {
    this.numbers.update((nums) => nums.filter((_, i) => i !== idx));
  }

  updateNumber(idx: number, newValue: number) {
    this.numbers.update((nums) => {
      const newNums = [...nums];
      newNums[idx] = newValue;
      return newNums;
    });
  }
}
