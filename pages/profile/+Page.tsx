import { Counter } from "./Counter.js";

import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material/styles';

import SideDrawer from '/components/SideDrawer';

export default function Page() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

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
          <Stack spacing={2} useFlexGap sx={{ display: 'flex', alignItems: 'center', width: '100%'}}>
            <Avatar alt="Jayasingawarman" src="/assets/camp1.png" sx={{ width: 128, height: 128 }} />
            <Typography variant="h6" component="h1" sx={{ textAlign: 'center'}}><strong>Yuda Kurnia Nurul Fikri</strong></Typography>
            <Divider flexItem />
          </Stack>
        )}
      </Grid>
      <div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <SideDrawer/>
        </Drawer>
      </div>
    </>
  );
}
