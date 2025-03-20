import { Observable } from 'rxjs';
import { Superhero } from '../entities/superhero';

export abstract class SuperheroRepository {
  abstract getSuperheroes(): Observable<Superhero[]>;
  abstract getSuperheroById(id: number): Observable<Superhero>;
}
