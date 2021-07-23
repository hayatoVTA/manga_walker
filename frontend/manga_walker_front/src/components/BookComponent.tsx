import React, { useState, useEffect } from 'react';
import Header from './Header';
import { getBookComponents } from '../api/getBooks';
import '../styles/global.module.css';
import CardCoverContent from './CardCoverContent';
import NowLoading from './NowLoading';

const BookComponent = () => {

  const initialState = {
    id: "",
    title: "",
    cover_img: "",
    created_at: "",
  }

  const [bookComponent, setBookComponent] = useState([initialState])
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    getBookComponents()
    .then(res => {
      setBookComponent(res);
      setLoading(false);
    })
    .catch(err => {
      throw new Error(err)
    })
  }, [])

  return (
    <>
      <Header />
      <div style={{display: 'flex', flexFlow: 'wrap'}}>
      {
        loading ?
        <NowLoading />
        :
        bookComponent.map(data => (
          <CardCoverContent key={data.id} {...data} />
        ))
      }
      </div>
    </>
  )
}

export default BookComponent
