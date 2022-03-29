class Size {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Image extends Size {
  // Add methods here
  constructor(url, size, width, height) {
    super(width, size);

    this.width = size.width;
    this.height = size.height;

    this.url = url;
    this.size = size;
  }

  getUrl() {
    return this.url;
  }

  setUrl(url) {
    this.url = url;
  }

  getSize() {
    return this.size;
  }

  setSize(width, height) {
    this.size = {
      width,
      height,
    };
  }

  cloneImage() {
    return this.constructor;
  }
}
