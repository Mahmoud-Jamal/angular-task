import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Card } from '../../models/home';
import { HomeService } from '../../services/home.service';
@Component({
  selector: 'app-add-product',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  card: Card[] = [];
  private readonly fb = inject(FormBuilder);
  private readonly homeService = inject(HomeService);

  form = this.fb.group({
    name: ['', Validators.required],
    data: this.fb.array([]),
  });

  get productData(): FormArray {
    return this.form.controls.data as FormArray;
  }

  addNewProperty(): void {
    const keyValueProperty = this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
    });
    this.productData.push(keyValueProperty);
  }
  addProduct(result: {}) {
    this.homeService.addItem(result).subscribe({
      next: (res) => {
        console.log(res);
        this.card.push(res);
        this.form.reset();
        this.productData.clear();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submit(): void {
    if (this.form.valid) {
      const name = this.form.value.name!;

      const dataArray = this.form.value.data as {
        key: string;
        value: string;
      }[];

      const dataObject: { [key: string]: string } = {};
      dataArray.forEach((pair: { key: string; value: string }) => {
        if (pair.key && pair.value) {
          dataObject[pair.key] = pair.value;
        }
      });

      const result = {
        name,
        data: dataObject,
      };
      this.addProduct(result);
      console.log(result);
    } else {
      alert('Please enter a product name .');
    }
  }

  delete(id: string, index: number): void {
    this.homeService.removeItem(id).subscribe({
      next: (res) => {
        this.card.splice(index, 1);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
