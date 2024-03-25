import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import BreadCrumbs from './MainContentComponents/Category/BreadCrums';
import { useNavigate } from 'react-router-dom';
const Header = ({ drawerWidth, handleDrawerToggle }) => {
  const navigate = useNavigate()
  const addCategory = () => {
    navigate('main-categories/addMainCategory')
  }
  return <>
  <div >
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
      className='ggg'
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <BreadCrumbs />
        <div className='addtocategory'>
          <Button variant="contained" color="success" onClick={() => addCategory()}>
            ADD
          </Button>
        </div>
      </Toolbar>
    </AppBar>
    </div>
  </>
}

export default Header