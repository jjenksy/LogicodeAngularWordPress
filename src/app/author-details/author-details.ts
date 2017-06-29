

export class AuthorDetails {
  private _name: string;
  private _url: string;
  private _description: string;
  private _avatar_urls: AvatarUrls;


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }


  get avatar_urls(): AvatarUrls {
    return this._avatar_urls;
  }

  set avatar_urls(value: AvatarUrls) {
    this._avatar_urls = value;
  }
}

export class AvatarUrls {
  private _24: string;
  private _48: string;
  private _96: string;


  get 24(): string {
    return this._24;
  }

  set 24(value: string) {
    this._24 = value;
  }

  get 48(): string {
    return this._48;
  }

  set 48(value: string) {
    this._48 = value;
  }

  get 96(): string {
    return this._96;
  }

  set 96(value: string) {
    this._96 = value;
  }

}
