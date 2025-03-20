export interface Superhero {
  id: number;
  name: string;
  thumbnail: Thumbnail;
  comics: number;
  series: number;
  stories: number;
}

export interface Thumbnail{ 
  path: string; 
  extension: string;
};