import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function InteractiveList({ onItemClick }) {
  // Example data
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
          onClick={() => onItemClick && onItemClick(order.id)}
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