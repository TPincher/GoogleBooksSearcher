export const getBookData = async (searchTerm, searchType, current) => {

    const checkBooks = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${searchType}${searchTerm}&maxResults=1`)
    const jsoncheck = await checkBooks.json()
    const totalReturns = jsoncheck.totalItems

    let returns = 40
    if (totalReturns < 40) returns = totalReturns
    if (totalReturns === 0) return ""

    const fetchBooks = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${searchType}${searchTerm}&startIndex=${current}&maxResults=${returns}`)
    const jsonFetch = await fetchBooks.json()
    const next = await jsonFetch.items

    const returnedBooks = next.map((book) => {

        const bookData = {
            title : book.volumeInfo.title,
            subtitle : book.volumeInfo.subtitle,
            authors : book.volumeInfo.authors,
            published : book.volumeInfo.publishedDate,
            description : book.volumeInfo.description,
            categories : book.volumeInfo.categories,
            averageRating : book.volumeInfo.averageRating,
            thumbnails : book.volumeInfo.imageLinks?.thumbnail
        }
    if (totalReturns != 0 ) return bookData

    })
  return returnedBooks
}
