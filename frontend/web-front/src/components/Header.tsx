import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import styled from '@emotion/styled';
import { FcGoogle } from 'react-icons/fc';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        fontWeight: 'bold',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: '#fff',
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      // padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    input: {
      width: 'auto',
      marginLeft: '8%',
    },
    iconButton: {
      padding: 10,
    },
  }),
);

const SearchBox = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: inset 5px 5px 5px #ccc;
  -moz-box-shadow: inset 5px 5px 5px #ccc;
  -webkit-box-shadow: inset 5px 5px 5px #ccc;
  -o-box-shadow: inset 5px 5px 5px #ccc;
  position: relative;
  border-radius: 15px;
  margin-right: 20px;
  padding-right: 10px;
  '&:hover': {
    background-color: #fff,
  };
  @media (min-width: 1400px) {
    width: 400px;
    text-align: center;
  }
  @media (max-width: 540px) {
    width: 100%;
    text-align: center;
  }
`;

const GoogleLogo = styled.div`
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`

export default function Header() {
  const classes = useStyles();
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [searchValue, setSearchValue] = useState("")

  const isMenuOpen = Boolean(menuAnchorEl);

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const handleSubmit = (e:any) => {
    const newArraySearchValue = searchValue.split(" ")
    const checkEmpty = newArraySearchValue.filter(d => d !== "")
    const newSearchValue = checkEmpty.join("+")
    const url = `https://www.google.com/search?sitesearch=mangabank.org&q=${newSearchValue}`
    window.open(url, '_blank')
    return e.preventDefault()
  }

  const handleSearchPropsChange = (event: any) => {
    setSearchValue(event.target.value)
  }

  const handleClickSearch = () => {
    // const newSearchValue = searchValue.replace(" ", "+")
    const newArraySearchValue = searchValue.split(" ")
    const checkEmpty = newArraySearchValue.filter(d => d !== "")
    const newSearchValue = checkEmpty.join("+")
    const url = `https://www.google.com/search?sitesearch=mangabank.org&q=${newSearchValue}`
    window.open(url, '_blank')
  }

  const menu = (
    <Menu
      anchorEl={menuAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{margin: '20px'}}
    >
      <Link to="/" style={{textDecoration: 'none', color: '#000'}}>
        <MenuItem onClick={handleMenuClose}>
          ホーム
        </MenuItem>
      </Link>
      <Link to="/all" style={{textDecoration: 'none', color: '#000'}}>
        <MenuItem onClick={handleMenuClose}>
          保存した作品一覧
        </MenuItem>
      </Link>
      <Link to="/add/books" style={{textDecoration: 'none', color: '#000'}}>
        <MenuItem onClick={handleMenuClose}>
          本を追加
        </MenuItem>
      </Link>
      <Link to="/add/items" style={{textDecoration: 'none', color: '#000'}}>
        <MenuItem onClick={handleMenuClose}>
          URLを追加
        </MenuItem>
      </Link>
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor: '#7E739B'}}>
        <Toolbar>
          <IconButton
              edge="start"
              className={classes.menuButton}
              aria-controls={menuId} 
              color="inherit"
              aria-label="open drawer"
              aria-haspopup="true"
              onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{textDecoration: 'none', color: 'white',}}>
            <Typography className={classes.title} variant="h5" noWrap>
              Manga Walker
            </Typography>
          </Link>
          <div className={classes.grow} />

          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          <SearchBox onSubmit={(e) => handleSubmit(e)}>
            <GoogleLogo>
              <FcGoogle />
            </GoogleLogo>
            <InputBase
              className={classes.input}
              placeholder="Googleで検索する"
              inputProps={{ 'aria-label': 'search google' }}
              onChange={(event) => handleSearchPropsChange(event)}
            />
            <IconButton
              className={classes.iconButton}
              aria-label="search"
              onClick={() => handleClickSearch()}
            >
              <SearchIcon />
            </IconButton>
          </SearchBox>
        </Toolbar>
      </AppBar>
      {menu}
    </div>
  );
}