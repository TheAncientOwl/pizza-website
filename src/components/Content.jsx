import React from 'react';
import { makeStyles, Drawer, AppBar, Toolbar, Typography, Divider } from '@material-ui/core';

import Title from './Title';
import CategoryList from './CategoryList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: '70%',
    marginRight: '30%',
  },
  drawer: {
    width: '30%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '30%',
  },
  // necessary for content to be below app bar
  toolbarFill: theme.mixins.toolbar,
  toolbar: {
    flexDirection: 'column',
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Title />
          <Divider />
          <CategoryList />
        </Toolbar>
      </AppBar>

      <main style={{ padding: '2vh' }}>
        <div className={classes.toolbarFill} />
        <div className={classes.toolbarFill} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
          velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu
          scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
          lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
      </main>

      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='right'>
        <Typography style={{ textAlign: 'center', marginTop: '5vh' }}>Coș</Typography>
      </Drawer>
    </div>
  );
}
