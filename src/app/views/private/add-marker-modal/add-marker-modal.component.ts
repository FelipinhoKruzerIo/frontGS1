import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ModalService } from 'ngx-modal-ease';
import { MarkerProperties } from '../home/home.component';

@Component({
  selector: 'app-add-marker-modal',
  templateUrl: './add-marker-modal.component.html',
  styleUrl: './add-marker-modal.component.scss',
})
export class AddMarkerModalComponent {
  form: FormGroup;

  selectedPosition: MarkerProperties | null = null;

  get label() {
    return this.form.get('label') as FormControl;
  }

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService
  ) {
    this.form = this.formBuilder.group({
      label: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
    if (this.modalService.options?.data) {
      this.selectedPosition = this.modalService.options?.data[
        'selectedPosition'
      ] as MarkerProperties;
    }
  }

  onClose(save = false) {
    this.modalService.close(
      save ? { ...this.selectedPosition, ...this.form.value } : null
    );
  }
}
