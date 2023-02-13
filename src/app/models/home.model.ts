export class HomeModel {
  title: string | undefined;
  image: string | undefined;
  location: string | undefined;

  constructor(json: HomeInterface) {
    this.title = json.title;
    this.image = json.image;
    this.location = json.location;
  }
}

export interface HomeInterface {
  title: string | undefined;
  image: string | undefined;
  location: string | undefined;
}
