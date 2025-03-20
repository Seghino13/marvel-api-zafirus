import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root',
})
export class MarvelAuthService {
  private publicKey: string = environment.publicKey;
  private privateKey: string = environment.privateKey;
  private currentTime: number = new Date().getTime();
  private hash: string = Md5.hashStr(this.currentTime + this.privateKey + this.publicKey);

  getAuthParams(): string {
    return `ts=${this.currentTime}&apikey=${this.publicKey}&hash=${this.hash}`;
  }
}
