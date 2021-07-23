import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import {
  useRecoilState,
} from "recoil";
import { dataAtom } from './StoreBook'
import { CONTENT_ATOM_PROPS } from '../types/types';

const ChoiceCategories = ({ categories }: any) => {

  const [data, setData] = useRecoilState<CONTENT_ATOM_PROPS>(dataAtom)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({title:data.title,category:event.target.value,url:data.url})
  };

  // categoriesMap

  return (
    <div>
      <TextField
        id="outlined-basic"
        select
        label="カテゴリを選ぶ"
        onChange={handleChange}
        style={{width: '100%'}}
      >
        {
          categories.map((d:any) => (
            <MenuItem key={d.title} value={d.id}>
              {d.title}
            </MenuItem>
          ))
        }
      </TextField>
    </div>
  )
}

export default ChoiceCategories
