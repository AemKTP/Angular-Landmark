import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import jsonData from '../../../assets/landmark.json';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule, RouterLink],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {
  id = '';
  landmarks = jsonData;
  landmark: any[] = jsonData;
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    console.log(this.id);
    this.landmark = [];
    console.log(this.landmark);
    for (const lm of this.landmarks) {
      if (lm.idx.toString() === this.id) {
        this.landmark.push(lm);
        console.log(lm);
        return;
      }
    }

  }
  
}
