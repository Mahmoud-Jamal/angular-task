import { Component } from '@angular/core';
import { AddProductComponent } from './componenets/add-product/add-product.component';
import { HomeComponent } from './componenets/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, AddProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test2';
}
