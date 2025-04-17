import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import Person2Icon from '@mui/icons-material/Person2';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import GradingIcon from '@mui/icons-material/Grading';
import BookIcon from '@mui/icons-material/Book';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NotificationsIcon from '@mui/icons-material/Notifications';

import charmed_logo from '/assets/charmed_scout.jpg';

export default function SideDrawer () {
  return(
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
          <Box
            component="img"
            sx={{ height: 64 }}
            alt="Charmed Scout"
            src={charmed_logo}
          />
          <p><strong>Charmed Scout App</strong></p>
        </ListItem>
        <Divider />
        <ListItem key="home" disablePadding>
          <ListItemButton href={`/`}>
            <ListItemIcon><HomeFilledIcon/></ListItemIcon>
            <ListItemText primary="Halaman Utama"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="profile" disablePadding>
          <ListItemButton href={`/profile`}>
            <ListItemIcon><Person2Icon/></ListItemIcon>
            <ListItemText primary="Profil"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="group" disablePadding>
          <ListItemButton>
            <ListItemIcon><GroupIcon/></ListItemIcon>
            <ListItemText primary="Kelompok"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="session" disablePadding>
          <ListItemButton>
            <ListItemIcon><WorkIcon/></ListItemIcon>
            <ListItemText primary="Pertemuan"></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="sku" disablePadding>
          <ListItemButton>
            <ListItemIcon><GradingIcon/></ListItemIcon>
            <ListItemText primary="SKU"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="skk" disablePadding>
          <ListItemButton>
            <ListItemIcon><GradingIcon/></ListItemIcon>
            <ListItemText primary="SKK"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="spg" disablePadding>
          <ListItemButton>
            <ListItemIcon><GradingIcon/></ListItemIcon>
            <ListItemText primary="SPG"></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="pp" disablePadding>
          <ListItemButton>
            <ListItemIcon><BookIcon/></ListItemIcon>
            <ListItemText primary="Petunjuk Penyelenggaraan"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="announcement" disablePadding>
          <ListItemButton>
            <ListItemIcon><NotificationsIcon/></ListItemIcon>
            <ListItemText primary="Pengumuman"></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem><Typography variant="caption">© 2025 by Kakatuahitam and Team</Typography></ListItem>
      </List>
    </Box>
  );
}
