/**
 * The post class is the model object
 * used to model the data being retrieved from the
 * wordpress rest api
 */
export class Post {
  private _id: number;
  private _title: Title;
  private _excerpt: Excerpt;
  private _acf: Acf;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get acf(): Acf {
    return this._acf;
  }

  set acf(value: Acf) {
    this._acf = value;
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
}

class Title{
  private _rendered : any;


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
 * Acf is a word press plugin
 * we use and it exposes more rest functionality
 */
class Acf {
  private _feature_image: {
    url: String;
  };

  private _youtube_imbed: {
    url: String;
  };


  get youtube_imbed(): { url: String } {
    return this._youtube_imbed;
  }

  get feature_image(): { url: String } {
    return this._feature_image;
  }

}
