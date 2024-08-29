import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListIcon from '@mui/icons-material/List';
import  Accordion  from './Accoridion';
import List  from './List';


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      
    >
      <Accordion>
        <List onClick={() => {toggleDrawer(false); console.log('覽趴')}}>
        </List>
      </Accordion>
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
      <Drawer open={open} onClose={toggleDrawer(false)} PaperProps={{
          style: {
            top: 82, 
            height: 'calc(100% - 82px)', 
            overflow: 'hidden'
            
          },
          
          onMouseLeave: toggleDrawer(false)
        }
      }
        BackdropProps={{
          style: {
            display: 'none'
          },
        }}>
        {DrawerList}
      </Drawer>
       
    </div>

    
  );
}
