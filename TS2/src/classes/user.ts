import { Library } from "./library";
import { Book } from "./book";

export class User {
  constructor(
    public userId: string,
    public name: string,
    public email: string,
  ) {}

  borrowBook(library: Library, bookId: string): Book | undefined {
    const book = library.findBookById(bookId);
    if (book) {
      library.removeBook(bookId);
    }
    return book;
  }
}
