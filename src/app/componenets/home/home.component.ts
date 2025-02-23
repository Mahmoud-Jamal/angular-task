import { CommonModule, KeyValuePipe } from '@angular/common';
import { Card } from '../../models/home';
import { HomeService } from './../../services/home.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  card: Card[] = [];
  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    // this.getData();
  }

  getData() {
    this.homeService.getData().subscribe({
      next: (res) => {
        console.log(res);
        this.card = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
