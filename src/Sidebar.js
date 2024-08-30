import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListIcon from '@mui/icons-material/List';
import Accoridion from './Accoridion';
import List from './List';
import { useTabContext } from './TabProvider';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const { tabDispatch } = useTabContext();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleListItemClick = (tabId, tabNo) => {
    tabDispatch('ADD', { id: tabId, no: tabNo });
    toggleDrawer(false)();
  };

  const DrawerList = (
    <Box sx={{ width: 250 }}>
      <Accoridion onItemClick={handleListItemClick}>
        <List />
      </Accoridion>
    </Box>
  );

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          height: '100vh',
          width: '10px',
          top: 0,
          left: 0,
          backgroundColor: 'transparent',
          zIndex: 1300, 
        }}
        onMouseEnter={toggleDrawer(true)}
      />
      <Button onClick={toggleDrawer(true)}>
        <ListIcon style={{ color: 'white', fontSize: 70, marginLeft: 'auto' }} />
      </Button>
      <Drawer 
        open={open} 
        onClose={toggleDrawer(false)} 
        PaperProps={{
          style: {
            top: 82, 
            height: 'calc(100% - 82px)', 
            overflow: 'hidden'
          },
          onMouseLeave: toggleDrawer(false)
        }}
        BackdropProps={{
          style: {
            display: 'none'
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}