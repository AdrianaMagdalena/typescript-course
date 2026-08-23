"use strict";
class Book {
    constructor(id, title, author, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(id) {
        if (this.findBookById(id) > -1) {
            this.books.splice(this.findBookById(id), 1);
        }
    }
    findBookById(id) {
        return this.books.findIndex((index) => index.id === id);
    }
    listAllBooks() {
        console.log("Currently available books:");
        this.books.forEach((book) => console.log(`id: ${book.id}, author: ${book.author}, title: ${book.title}, price: ${book.price} Ft`));
    }
}
class User {
    constructor(userId, name, email) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }
    borrowBook(library, bookId) {
        library.removeBook(bookId);
    }
}
const book1 = new Book("a01", "Mély levegő", "Halász Rita", 2599);
const book2 = new Book("a02", "A szakállas Neptun", "Nádasdy Ádám", 4499);
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.listAllBooks();
const user1 = new User("abc123", "Teszt Elek", "teszt.elek@gmail.com");
user1.borrowBook(library, "a01");
library.listAllBooks();
