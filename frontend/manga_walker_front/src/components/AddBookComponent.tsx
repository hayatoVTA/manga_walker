import React, { useState } from 'react'
import { BOOK_COMPONENT_UPLOAD_PROPS } from '../types/types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CancelIcon from '@material-ui/icons/Cancel';

const AddBookComponent = (
  {title, componentRef, photos, setPhotos}
  : BOOK_COMPONENT_UPLOAD_PROPS)
  : React.ReactElement => {

  const [isNumberError, setIsNumberError] = useState(false);
  const [isFileTypeError, setIsFileTypeError] = useState(false);

  const resetErrors = () => {
    setIsNumberError(false);
    setIsFileTypeError(false);
  };

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null || event.target.files.length === 0) {
      return;
    }
    const files = Object.values(event.target.files).concat();
    // 初期化することで同じファイルを連続で選択してもonChagngeが発動するように設定し、画像をキャンセルしてすぐに同じ画像を選ぶ動作に対応
    event.target.value = "";
    resetErrors();

    const pickedPhotos = files.filter((file) => {
      if (
        ![
          "image/gif",
          "image/jpeg",
          "image/png",
          "image/bmp",
          "image/svg+xml",
        ].includes(file.type)
      ) {
        setIsFileTypeError(true);
        return false;
      }

      return true;
    });

    if (pickedPhotos.length === 0) {
      return;
    }
    const concatPhotos = photos.concat(pickedPhotos);
    if (concatPhotos.length >= 2) {
      setIsNumberError(true);
    }
    setPhotos(concatPhotos.slice(0, 1));
  };

  const handleCancel = (photoIndex: number) => {
    if (window.confirm("選択した画像を消してよろしいですか？")) {
      resetErrors();
      const modifyPhotos = photos.concat();
      modifyPhotos.splice(photoIndex, 1);
      setPhotos(modifyPhotos);
    }
  };
  return (
    <>
      <div>
        {[...Array(1)].map((_: number, index: number) =>
          index < photos.length ? (
            <div key={index} style={{ textAlign: 'center', maxWidth: '100%'}}>
              <IconButton key={index} onClick={() => handleCancel(index)} style={{ verticalAlign: 'top', marginTop: '6px' }}>
                <CancelIcon style={{ fontSize: 50, color: '#000000' }} />
              </IconButton>
              <img
                src={URL.createObjectURL(photos[index])}
                alt=""
                style={{maxWidth: '300px', marginBottom: '20px'}}
              />
            </div>
          ) : (
            <label htmlFor={title} key={index}>
            </label>
          )
        )}
      </div>
      {isNumberError && (
        <p>※二枚以上選択することはできません</p>
      )}
      {isFileTypeError && (
        <p>※jpeg, png, bmp, gif, svg以外のファイル形式は表示されません</p>
      )}

      <div>
        <label htmlFor={title}>
          <input
            type="file"
            accept="image/*"
            id={title}
            ref={componentRef}
            onChange={handleFile}
            style={{display: 'none'}}
          />
          <Button color="secondary" variant="contained" component="span" endIcon={<PhotoCamera />} style={{width: '100%'}}>
            ファイルを選択
          </Button>
        </label>
      </div>
    </>
  )
}

export default AddBookComponent
