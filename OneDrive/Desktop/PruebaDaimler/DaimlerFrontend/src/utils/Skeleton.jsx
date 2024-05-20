import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Animations() {
  return (
    <div className="flex flex-col items-center justify-center my-20">
    <Box sx={{ width: 1200 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
    </div>

  );
}
