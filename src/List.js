import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import useTabs from './useTabs'; // 假设 useTabs 是你自己定义的一个 Hook

export default function InteractiveList() {
  const [tabs, tabDispatch] = useTabs();
  const isEmpty = tabs.storedTabs.length === 0;

  // 示例数据
  const data = [
    {
      id: "1",
      no: "ORD12345",
      total: 1500,
    },
    {
      id: "2",
      no: "ORD12346",
      total: 2000,
    },
  ];

  return (
    <Box>
      {data.map((order) => (
        <Button
          key={order.id}
          variant="outlined"
          onClick={() => tabDispatch('ADD', { id: order.id, no: order.no })}
        >
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography>{order.no}</Typography>
            <Typography>$ {order.total}</Typography>
          </Box>
        </Button>
      ))}
    </Box>
  );
}
