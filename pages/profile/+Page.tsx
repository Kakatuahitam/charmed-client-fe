import { Counter } from "./Counter.js";

import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material/styles';

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

export default function Page() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
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
          <ListItemButton>
            <ListItemIcon><HomeFilledIcon/></ListItemIcon>
            <ListItemText primary="Halaman Utama"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="home" disablePadding>
          <ListItemButton>
            <ListItemIcon><Person2Icon/></ListItemIcon>
            <ListItemText primary="Profil"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="home" disablePadding>
          <ListItemButton>
            <ListItemIcon><GroupIcon/></ListItemIcon>
            <ListItemText primary="Kelompok"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="home" disablePadding>
          <ListItemButton>
            <ListItemIcon><WorkIcon/></ListItemIcon>
            <ListItemText primary="Pertemuan"></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="home" disablePadding>
          <ListItemButton>
            <ListItemIcon><GradingIcon/></ListItemIcon>
            <ListItemText primary="SKU"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="home" disablePadding>
          <ListItemButton>
            <ListItemIcon><GradingIcon/></ListItemIcon>
            <ListItemText primary="SKK"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="home" disablePadding>
          <ListItemButton>
            <ListItemIcon><GradingIcon/></ListItemIcon>
            <ListItemText primary="SPG"></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="home" disablePadding>
          <ListItemButton>
            <ListItemIcon><BookIcon/></ListItemIcon>
            <ListItemText primary="Petunjuk Penyelenggaraan"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="home" disablePadding>
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  return (
    <>
      <Grid size={12}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Grid>
      <Grid size={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:2 }}>
        {isMobile && (
          <Stack>
            <Typography variant="h5" component="h1" sx={{ mb: 2, textAlign: 'center'}}>Halaman Profil</Typography>
          </Stack>
        )}
      </Grid>
      <div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
}
