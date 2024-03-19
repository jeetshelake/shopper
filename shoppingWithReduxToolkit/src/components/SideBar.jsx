
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// all logo imports
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import FiberSmartRecordRoundedIcon from '@mui/icons-material/FiberSmartRecordRounded';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import RoomPreferencesRoundedIcon from '@mui/icons-material/RoomPreferencesRounded';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


import { useNavigate } from 'react-router-dom';


const SideBar = () => {
  const navigate = useNavigate()
  const MenuList = [{name:'Dashboard', logo:<SpeedOutlinedIcon />, route:'/'},{name:'Main Category', logo:<CategoryRoundedIcon />, route:'main-categories'},{name:'Sub Category', logo:<FiberSmartRecordRoundedIcon />, route:"sub-categories"},{name:'Products', logo:<ProductionQuantityLimitsRoundedIcon />, route:'products'},{name:'Orders', logo:<LocalShippingRoundedIcon />, route:'orders'},{name:'Users', logo:<PeopleAltRoundedIcon />, route:'users'},{name:'NewsLetters', logo:<NewspaperRoundedIcon />,route:'news-letter'},{name:'Setting', logo:<RoomPreferencesRoundedIcon />, route:'settings'}]
  return <>
    <List>
      {MenuList.map((obj, index) => (
        <ListItem key={obj.name} disablePadding onClick={()=>navigate(obj.route)}>
          <ListItemButton>
            <ListItemIcon>
              {obj.logo}
            </ListItemIcon>
            <ListItemText primary={obj.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </>
}

export default SideBar






