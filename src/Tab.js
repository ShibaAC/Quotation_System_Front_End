import React, { useEffect } from 'react';
import { Box, Button, Typography, Tab, Tabs as MuiTabs, Alert } from '@mui/material';
import { useTabContext } from './TabProvider';

function Example() {
  const { state, tabDispatch } = useTabContext();
  const { currentTab, storedTabs } = state;

  const handleTabChange = (event, newValue) => {
    tabDispatch('NAVIGATE', newValue);
  };

  const handleTabClose = (tabId) => {
    tabDispatch('REMOVE', tabId);
  };

  useEffect(() => {
    console.log('Current Tab:', currentTab);
    const currentTabDetails = storedTabs.find(tab => tab.id === currentTab);
    console.log('Current Tab Details:', currentTabDetails);
  }, [currentTab, storedTabs]);

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box mt={2} ml={'18%'} maxWidth={'82%'}>
        {storedTabs.length === 0 ? (
          <Alert severity="info">Select an order from the list to view.</Alert>
        ) : (
          <MuiTabs value={currentTab} onChange={handleTabChange}>
            {storedTabs.map((tab) => (
              <Tab
                key={tab.id}
                label={tab.id}
                value={tab.id}
                onClose={() => handleTabClose(tab.id)}
                icon={
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTabClose(tab.id)
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
      {currentTab && (
        <Box mt={2} ml={'18%'} maxWidth={'82%'}>
          <Typography variant="h6">Order Details for {currentTab}</Typography>
          {/* Add more order details here */}
        </Box>
      )}
    </Box>
  );
}

export default Example;