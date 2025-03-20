import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Superhero } from '../../domain/entities/superhero';
import { MarvelApiService } from '../../infrastructure/api/marvel-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true,
})
export class HomePage {
  superheroes: Superhero[] = [];

  constructor(
    private marvelService: MarvelApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.marvelService
      .getSuperheroes()
      .subscribe((data) => (this.superheroes = data));
  }

  goToDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
