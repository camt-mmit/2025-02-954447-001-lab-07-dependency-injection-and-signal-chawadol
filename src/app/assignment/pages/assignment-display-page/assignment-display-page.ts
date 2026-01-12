import { Component, signal, inject, effect } from '@angular/core';
import { SectionStorage } from '../services/result.storage';
import { DynamicSectionComponent } from '../components/dynamic-section/dynamic-section';

@Component({
  selector: 'app-assignment-page',
  standalone: true,
  imports: [DynamicSectionComponent],
  templateUrl: './assignment-display-page.html',
  styleUrl: './assignment-display-page.scss',
})
export class AssignmentPageComponent {
  private readonly storage = inject(SectionStorage);

  readonly sections = signal<number[][]>(this.storage.get());

  constructor() {
    effect(() => {
      this.storage.set(this.sections());
    });
  }

  addSection() {
    this.sections.update((secs) => [...secs, []]);
  }

  removeSection(index: number) {
    this.sections.update((secs) => secs.filter((_, i) => i !== index));
  }
}
