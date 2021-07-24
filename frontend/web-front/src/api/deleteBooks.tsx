export const deleteBookCategory = async (categoryId:any) => {
  await fetch(`http://160.251.82.69:8080/api/books/${categoryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const deleteBook = async (bookId:any) => {
  await fetch(`http://160.251.82.69:8080/api/items/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
} 