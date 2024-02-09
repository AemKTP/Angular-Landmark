import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import jsonData from '../../../assets/landmark.json';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-landmarks',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatSelectModule, MatOptionModule,
    RouterLink, HttpClientModule],
  templateUrl: './landmarks.component.html',
  styleUrl: './landmarks.component.scss'
})
export class LandmarksComponent {

  landmarks = jsonData;
  landmark: any[] = jsonData;
  constructor() {
    console.log(this.landmarks);
  }

  findID(id: HTMLInputElement) {
    console.log(id.value);
    this.landmark = [];
    for (const lm of this.landmarks) {
      if (lm.idx.toString() === id.value) {
        this.landmark.push(lm);
        console.log(this.landmark);
        return;
      }
    }
  }

  findName(searchName: HTMLInputElement) {
    console.log(searchName.value);
    this.landmark = [];
    for (const foundName of this.landmarks) {
      if (foundName.name.includes(searchName.value)) {
        this.landmark.push(foundName);
        console.log(this.landmark);
      }
    }
  }

  nameCountry = ['ญี่ปุ่น', 'ประเทศไทย', 'เนเธอร์แลนด์']
  SelectChange(event: any) {
    this.landmark = [];
    console.log(event.value);
    for (const foundContry of this.landmarks) {
      if (foundContry.country.toString() === event.value) {
        this.landmark.push(foundContry);
        console.log(this.landmark);

      }
    }
  }

}