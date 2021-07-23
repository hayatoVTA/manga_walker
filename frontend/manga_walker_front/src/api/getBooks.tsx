const toJson = async (res:any) => {
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error(json.message);
  }
}

// 本の一覧取得
export const getAllStoreBooks = async () => {
  const res = await fetch('http://127.0.0.1:8000/manga_walker/StoreBook/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return await toJson(res);
}

// 本のComponent一覧取得
export const getBookComponents = async () => {
  const res = await fetch('http://127.0.0.1:8000/manga_walker/BookComponent/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return await toJson(res);
}

// 絞り込みで一覧取得
export const getFilteringBooks = async (categoryId:any) => {
  const res = await fetch(`http://127.0.0.1:8000/manga_walker/listbook/?category=${categoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return await toJson(res);
} 