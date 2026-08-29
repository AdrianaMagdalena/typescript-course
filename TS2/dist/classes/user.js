export class User {
    constructor(userId, name, email) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }
    borrowBook(library, bookId) {
        const book = library.findBookById(bookId);
        if (book) {
            library.removeBook(bookId);
        }
        return book;
    }
}
