import { CONTENT_ATOM_PROPS } from '../types/types';
import axios from 'axios';

export const createBookComponent = async (formData: any) => {

  axios({
    url: "http://127.0.0.1:8000/manga_walker/BookComponent/",
    method: "post",
    data: formData,
    headers: {
      "content-type": "multipart/form-data",
    },
  })
  .then(response => console.log("POST確認 => ", response.data))
  .then(() =>  (window.confirm("アップロード完了") && console.log("完了")))
  .catch((error) => {
    alert("エラーが発生しました。");
  });

  // await fetch(`http://127.0.0.1:8000/manga_walker/BookComponent/`, {
  //   method: "POST",
  //   headers: {
  //     "content-type": "multipart/form-data",
  //   },
  //   body: formData
  // })
  // .then(response => response.text())
  // .then(text => {
  //     console.log("POST確認 ---> ", text)
  // })
}

export const storeUrlData = async (data: CONTENT_ATOM_PROPS) => {
  axios({
    url: "http://127.0.0.1:8000/manga_walker/StoreBook/",
    method: "post",
    data: data,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => console.log("StoregeUrlData POST確認 => ", response.data))
}