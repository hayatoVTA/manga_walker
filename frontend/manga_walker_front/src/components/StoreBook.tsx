import { useState, useEffect } from 'react';
import { storeUrlData } from "../api/postBooks";
import Header from './Header'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from '@emotion/styled';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {　CONTENT_ATOM_PROPS } from '../types/types';
import { getBookComponents } from "../api/getBooks";
import ChoiceCategories from "./ChoiceCategories";
import '../styles/global.module.css';
import {
  atom,
  useRecoilState,
} from "recoil";
import NowLoading from './NowLoading';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputForm: {
      maxWidth: '500px',
      margin: '0 auto',
      marginTop: '40px',
      marginBottom: '150px'
    },
  }),
);

export const dataAtom = atom<CONTENT_ATOM_PROPS>({
  key: "dataAtomState",
  default: {title:"",category:"",url:""},
})

const AddButton = styled.button`
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  cursor: pointer;
  border: 0;
  width: 100%;
  :hover {
    background-color: #1f2e82;
  }
`;

const StoreBookTitle = styled(Typography)`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const StoreBook = () => {

  const initialState = {
    id: "",
    title: "",
    cover_img: "",
    created_at: ""
  }

  const [data, setData] = useRecoilState<CONTENT_ATOM_PROPS>(dataAtom)
  const [loading, setLoading] = useState(true)

  const [allData, setAllData] = useState([initialState])

  useEffect(() => {

    getBookComponents()
    .then(res => {
      setAllData(res)
      setLoading(false)
    })

  }, [])
  
  const classes = useStyles();

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    if (
      data.title === "" && data.url === ""
    ) {
      // からの場合はPOSTしない
      return;
    }

    await storeUrlData(data)
  }

  const handleFormChange = (event:any) => {
    switch (event.target.name) {
      case "title":
        setData({title:event.target.value,category:data.category,url:data.url})
        break;
      case "url":
        setData({title:data.title,category:data.category,url:event.target.value})
        break;
      default:
        console.log(event.target.name)
    }
  }


  return (
    <>
      <Header />
        {
        loading
          ?
            <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '10px', marginRight: '10px'}}>
              <NowLoading />
            </div>
          :
            <>
              <StoreBookTitle variant="h4">
                新規URLを追加する
              </StoreBookTitle>
              <Divider />
              <Card className={classes.inputForm}>
                <CardContent>
                  {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                  <form onSubmit={handleSubmit}>
                    <div style={{margin: '20px'}}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="タイトル"
                        size="small"
                        required
                        type="text"
                        name="title"
                        // {...register("title", { required: true })}
                        style={{width: '100%'}}
                        onChange={handleFormChange}
                      />
                    </div>
                    <div style={{margin: '20px'}}>
                      <ChoiceCategories categories={allData} />
                    </div>
                    <div style={{margin: '20px'}}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="URL"
                        size="small"
                        required
                        type="text"
                        name="url"
                        style={{width: '100%'}}
                        onChange={handleFormChange}
                      />
                    </div>
                    <div style={{margin: '20px'}}>
                    <AddButton>追加する</AddButton>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </>
      }
    </>
  );
};

export default StoreBook;