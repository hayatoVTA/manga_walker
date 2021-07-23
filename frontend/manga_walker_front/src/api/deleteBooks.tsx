export const deleteBookCategory = async (categoryId:any) => {
  await fetch(`http://127.0.0.1:8000/manga_walker/BookComponent/${categoryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const deleteBook = async (bookId:any) => {
  await fetch(`http://127.0.0.1:8000/manga_walker/StoreBook/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
} 