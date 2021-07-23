import TextField from '@material-ui/core/TextField';
import {　CONTENT_ATOM_PROPS } from '../types/types';
import '../styles/global.module.css';
import {
  useRecoilState,
} from "recoil";
import { dataAtom } from './StoreBook'

const InputTitle = () => {

  const [data, setData] = useRecoilState<CONTENT_ATOM_PROPS>(dataAtom)

  const handleFormChange = (event:any) => {
    setData({title:data.title,category:data.category,url:event.target.value})
  }

  return (
    <div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="URL"
        size="small"
        required
        type="text"
        name="url"
        value={data.url}
        style={{width: '100%'}}
        onChange={handleFormChange}
      />
    </div>
  )
}

export default InputTitle
