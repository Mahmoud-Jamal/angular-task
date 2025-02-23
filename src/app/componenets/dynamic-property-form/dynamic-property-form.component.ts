import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { Card } from '../../models/home';

@Component({
  selector: 'app-dynamic-property-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-property-form.component.html',
  styleUrls: ['./dynamic-property-form.component.css'],
})
export class DynamicPropertyFormComponent {}
