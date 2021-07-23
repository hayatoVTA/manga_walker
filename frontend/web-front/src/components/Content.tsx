import Card from '@material-ui/core/Card';
import styled from '@emotion/styled';
import { CONTENT_PROPS } from '../types/types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "@material-ui/core";
import { deleteBook } from "../api/deleteBooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContent: {
      margin: '8px',
    },
    cardTitle: {
      paddingLeft: '10px',
      paddingRight: '10px'
    },
    cardUrlWrapper: {
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    cardUrl: {
      paddingLeft: '10px',
      paddingRight: '10px',
      textDecoration: 'none',
    },
    cardDate: {
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  }),
);

const CardWrapper = styled.div`
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

const handleDelete = (id: any) => {
  if (window.confirm("選択したコンテンツを削除してよろしいですか？")) {
    deleteBook(id);
    window.location.reload();
  }
}

const Content = (data: CONTENT_PROPS) => {

  const classes = useStyles();
  return (
    <CardWrapper>
      <Card className={classes.cardContent}>
        <h2 className={classes.cardTitle}>{data.title}</h2>
        <p className={classes.cardUrlWrapper}><a target="_blank" rel="noreferrer" href={data.url} className={classes.cardUrl}>{data.url}</a></p>
        <CardBottom>
          <p className={classes.cardDate}>追加日:{data.stored_at}</p>
          <IconButton onClick={() => handleDelete(data.id)}>
            <DeleteIcon style={{ fontSize: '27px'}} />
          </IconButton>
        </CardBottom>
      </Card>
    </CardWrapper>
  )
}

export default Content
