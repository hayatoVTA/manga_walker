import React from 'react';
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
      backgroundColor: alpha(theme.palette.common.white, 0.15),
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
      padding: theme.spacing(0, 2),
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
  }),
);

export default function Header() {
  const classes = useStyles();
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(menuAnchorEl);

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

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
      <Link to="/AddBookComponent" style={{textDecoration: 'none', color: '#000'}}>
        <MenuItem onClick={handleMenuClose}>
          本を追加
        </MenuItem>
      </Link>
      <Link to="/StoreBook" style={{textDecoration: 'none', color: '#000'}}>
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

          <div className={classes.search}>
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
          </div>
        </Toolbar>
      </AppBar>
      {menu}
    </div>
  );
}