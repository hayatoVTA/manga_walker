import { useForm } from "react-hook-form";
import { useState } from 'react';
import imageCompression from "browser-image-compression";
import { createBookComponent } from "../api/postBooks";
import AddBookComponent from "./AddBookComponent";
import Header from './Header'
import { Inputs } from "../types/types";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styled from '@emotion/styled';
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

const StoreBookTitle = styled(Typography)`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;

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

const AddBookCoverComponent = () => {
  
  const classes = useStyles();

  const { register, handleSubmit } = useForm<Inputs>({
    mode: "onBlur",
  });
  const [photos, setPhotos] = useState<File[]>([]);

  const onSubmit = async (data: Inputs): Promise<void> => {
    const { title } = data;
    if (
      title === "" &&
      photos.length === 0
    ) {
      // 空の場合はPOSTしない
      return;
    }

    // 画像を送信できるようにFormDataに変換する
    const formData = new FormData();
    formData.append("title", title);

    const compressOptions = {
      // 3MB以下に圧縮する
      maxSizeMB: 3,
    };
    const compressedPhotoData = await Promise.all(
      photos.map(async (photo) => {
        return {
          blob: await imageCompression(photo, compressOptions),
          name: photo.name,
        };
      })
    );
    compressedPhotoData.forEach((photoData) => {
      formData.append("cover_img", photoData.blob, photoData.name);
    });
    
    createBookComponent(formData);

  };

  return (
    <>
      <Header />
      <StoreBookTitle variant="h4">
        本を追加する
      </StoreBookTitle>
      <Divider />
      <Card className={classes.inputForm}>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{margin: '20px'}}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Title"
                size="small"
                required
                type="text"
                {...register("title", { required: true })}
                style={{width: '100%'}}
              />
            </div>
            <div style={{margin: '20px'}}>
              <AddBookComponent title="cover_img" photos={photos} setPhotos={setPhotos} />
            </div>
            <div style={{margin: '20px'}}>
              <AddButton>
                追加する
              </AddButton>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default AddBookCoverComponent;