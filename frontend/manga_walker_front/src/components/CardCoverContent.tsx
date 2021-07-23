import React from "react";
import styled from '@emotion/styled'
import Card from '@material-ui/core/Card';
import { CARD_COVER_CONTENT_PROPS } from "../types/types";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import '../styles/global.module.css';
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "@material-ui/core";
import { deleteBookCategory } from "../api/deleteBooks";

const ImageField = styled.img`
  
  @media (max-width: 1450px) {
    width: auto;
    height: 400px;
  }
  @media (max-width: 540px) {
    height: auto;
    width: 100%;
  }
`

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContent: {
      margin: '13px',
      marginTop: '30px',
    },
    cardTitle: {
      paddingLeft: '10px',
      paddingRight: '10px',
      color: '#000',
    },
    cardDate: {
      paddingLeft: '10px',
      paddingRight: '10px',
    }
  }),
);

const handleDelete = (id: any) => {
  if (window.confirm("選択したコンテンツを削除してよろしいですか？")) {
    deleteBookCategory(id);
    window.location.reload();
  }
}

const CardCoverContent = (data: CARD_COVER_CONTENT_PROPS) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.cardContent}>
        <Link to={`/book/${data.id}`} style={{ textDecoration: 'none' }}>
          <h2 className={classes.cardTitle}>{data.title}</h2>
          <ImageField src={data.cover_img} alt="" />
        </Link>
        <CardBottom>
          <p className={classes.cardDate}>追加日:{data.created_at}</p>
          <IconButton onClick={() => handleDelete(data.id)}>
            <DeleteIcon style={{ fontSize: '27px'}} />
          </IconButton>
        </CardBottom>
      </Card>
    </>
  )
}

export default CardCoverContent
