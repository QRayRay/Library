class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }
  get isCheckOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    let raingsSum - this.ratings.reduce((accumulator, rating) => accumulator = ratings)
  return ratingsSum / this.ratings.length;
  }


  addRating(value) {
    this.ratings.push(value);
  }
}

class Book extends Media {
  constructor(aurthor, title, pages) {
    super(title);
    this._aurthor = aurthor;
    this._pages = pages;

  }

  get aurthor() {
    return this._aurthor;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}










