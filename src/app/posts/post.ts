/**
 * The post class is the model object
 * used to model the data being retrieved from the
 * wordpress rest api
 */
export class Post {
  private _id: number;
  private _title: Title;
  private _excerpt: Excerpt;
  private links: Links;
  private _featured_media_url: any;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }


  get featured_media_url(): any {
    return this._featured_media_url;
  }

  set featured_media_url(value: any) {
    this._featured_media_url = value;
  }

  get title(): Title {
    return this._title;
  }

  set title(value: Title) {
    this._title = value;
  }

  get excerpt(): Excerpt {
    return this._excerpt;
  }

  set excerpt(value: Excerpt) {
    this._excerpt = value;
  }


  get _links(): Links {
    return this.links;
  }

  set _links(value: Links) {
    this.links = value;
  }
}

class Title{
  private _rendered: any;


  get rendered(): any {
    return this._rendered;
  }

  set rendered(value: any) {
    this._rendered = value;
  }
}

class Excerpt{
  private _rendered: any;


  get rendered(): any {
    return this._rendered;
  }

  set rendered(value: any) {
    this._rendered = value;
  }
}

/**
 * The class to model my links object
 */
class Links {
  private _author: Link[];


  get author(): Link[] {
    return this._author;
  }

  set author(value: Link[]) {
    this._author = value;
  }
}

class Link {
  private _href: String;


  get href(): String {
    return this._href;
  }

  set href(value: String) {
    this._href = value;
  }
}
