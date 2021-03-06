import { useEffect, useState } from 'react'
import Header from './Header'
import NowLoading from './NowLoading';
import { getFilteringBooks } from '../api/getBooks';
import BookWrapper from './BookWrapper';
import '../styles/global.module.css';

const Book = ({match}:any) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFilteringBooks(match.params.pageId)
    .then(res => {
      setData(res);
      setLoading(false)
    })
    .catch(err => {
      throw new Error(err)
    })
  }, [match.params.pageId])

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
        <>
          {
            data.map(d => (
              <BookWrapper data={d} />
            ))
          }
        </>
      }
      </div>
    </>
  )
}

export default Book
