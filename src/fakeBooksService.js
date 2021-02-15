let booksInfo = [];
let isAdded = false;
 
export function getBooks() {
  return booksInfo;
}
 
export function addBooksFromAPI(val) {
  booksInfo = [...val];
}
 
export function addNewBook(val) {
    booksInfo = [val, ...booksInfo];
    isAdded = true
}

export function bookAdded()   {
  return isAdded;
}

export function setIsBookAdded()   {
  isAdded = false;
}