class Book {
  constructor(name, author, synopsys, path, image, tag) {
    this.name = name;
    this.author = author;
    this.synopsys = synopsys;
    this.path = path;
    this.image = image;
    this.tag = tag;
  }
}

async function readJson(path) {
  try {
    const response = await fetch(path);
    const data = await response.json();

    return data.map(
      (bookData) =>
        new Book(
          bookData.name,
          bookData.author,
          bookData.synopsys,
          bookData.path,
          bookData.image,
          bookData.tag,
        ),
    );
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { readJson };
