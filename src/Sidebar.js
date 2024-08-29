import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListIcon from '@mui/icons-material/List';


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="" >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <ListIcon style={{ color: 'white', fontSize: '70', marginLeft: 'auto' }} />
      </Button>
      <Drawer
        open={open}
        // onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            top: 64, // Adjust this value according to your Navbar height
            height: 'calc(100% - 64px)', // Adjust the height to fit the remaining space
            overflowY: 'auto', // Enable scrolling if content overflows
          },
        }}
        BackdropProps={{
          style: {
            display: 'none', // Hide the backdrop to remove the overlay effect
          },
        }}
        sx={{
          '& .MuiDrawer-paper': {
            top: 80, // Ensure drawer top aligns with Navbar bottom
            height: 'calc(100% - 80px)', // Height adjustment
          }
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
