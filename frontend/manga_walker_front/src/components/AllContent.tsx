import React, { useState, useEffect } from 'react'
import { getAllStoreBooks } from '../api/getBooks';
import '../styles/global.module.css';
import Content from './Content';
import Header from './Header';
import NowLoading from './NowLoading';

const AllContent = () => {

  const initialState = {
    id: "",
    title: "",
    category: "",
    url: "",
    stored_at: "",
  }

  const [allBooks, setAllBooks] = useState([initialState])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllStoreBooks()
    .then(res => {
      setAllBooks(res);
      setLoading(false);
    })
    .catch(err => {
      throw new Error(err)
    })
  }, [])

  return (
    <>
      <Header />
      <br />
      <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '10px', marginRight: '10px'}}>
      {
        loading
        ?
          <NowLoading />
        :
        allBooks.map(data => (
          <Content key={data.id} {...data} />
        ))
      }
      </div>
    </>
  )
}

export default AllContent
