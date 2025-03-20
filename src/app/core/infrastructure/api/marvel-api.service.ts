import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Superhero } from '../../domain/entities/superhero';
import { SuperheroRepository } from '../../domain/repositories/superhero.repository';
import { MarvelAuthService } from './marvel-auth.service';

@Injectable({
  providedIn: 'root',
})
export class MarvelApiService extends SuperheroRepository {
  private baseUrl: string = environment.marvelApiUrl;

  constructor(private http: HttpClient, private authService: MarvelAuthService) {
    super();
  }

  getSuperheroes(): Observable<Superhero[]> {
    const url = `${this.baseUrl}/characters?limit=20&${this.authService.getAuthParams()}`;
    return this.http.get<any>(url).pipe(
      map(response =>
        response.data.results.map((hero: any) => ({
          id: hero.id,
          name: hero.name,
          thumbnail: hero.thumbnail,
          comics: hero.comics.available,
          series: hero.series.available,
          stories: hero.stories.available,
        }))
      )
    );
  }

  getSuperheroById(id: number): Observable<Superhero> {
    const url = `${this.baseUrl}/characters/${id}?${this.authService.getAuthParams()}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        const hero = response.data.results[0];
        return {
          id: hero.id,
          name: hero.name,
          thumbnail: hero.thumbnail,
          comics: hero.comics.available,
          series: hero.series.available,
          stories: hero.stories.available,
        };
      })
    );
  }
}
