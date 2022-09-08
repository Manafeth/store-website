import React, { FC } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { OrderData } from '../../types/cart';
interface Props {
  orderData?: OrderData;
}

const OrderTimeline: FC<Props> = ({orderData}) => {
  return (
    <>
      <Timeline
        sx={{
          '& .MuiTimelineItem-missingOppositeContent:before': {
            flex: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Grid container spacing='40px'>
              <Grid item xs={6}>
                <Typography
                  variant='h6'
                  component='h1'
                  sx={{ color: 'primary.dark' }}
                >
                  Order placed
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ color: 'text.grey' }}
                >
                  Apr 5, 2022, 02:50:23 PM
                </Typography>
              </Grid>
            </Grid>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default OrderTimeline;
