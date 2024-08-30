import React from 'react';
import useTabs from './useTabs';
import { Box, Button, Typography, Tab, Tabs as MuiTabs, Alert } from '@mui/material';
import List  from './List';



function Example() {
  const [tabs, tabDispatch] = useTabs();
  const isEmpty = tabs.storedTabs.length === 0;

  return (
    <Box display="flex" flexDirection="column" width="100%">

      

      <Box mt={2}>
        {isEmpty ? (
          <Alert severity="info">Select an order from the list to view.</Alert>
        ) : (
          <MuiTabs value={tabs.currentTab}>
            {tabs.storedTabs.map((tab) => (
              <Tab
                key={tab.id}
                label={tab.no}
                value={tab.id}
                onClick={() => tabDispatch('NAVIGATE', tab.id)}
                icon={
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      tabDispatch('REMOVE', tab.id);
                    }}
                  >
                    ✕
                  </Button>
                }
              />
            ))}
          </MuiTabs>
        )}
      </Box>
    </Box>
  );
}

export default Example;
