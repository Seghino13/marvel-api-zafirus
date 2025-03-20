import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Superhero } from 'src/app/core/domain/entities/superhero';
import { MarvelApiService } from 'src/app/core/infrastructure/api/marvel-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DetailComponent implements OnInit {
  hero?: Superhero;

  constructor(
    private route: ActivatedRoute,
    private marvelService: MarvelApiService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.marvelService.getSuperheroById(id).subscribe((data) => {
      this.hero = data; 
    });
  }
}
