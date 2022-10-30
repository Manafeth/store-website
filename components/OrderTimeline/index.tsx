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
import moment from 'moment';
import { orderStatusEnums } from '../../constants/statuses';
import StatusText from '../StatusText';
import { useTranslation } from 'next-i18next';
interface Props {
  data: {
    id: number,
    changeAt: string,
    new: number
  }
}

const OrderTimeline: FC<Props> = ({ data }) => {
  const [t] = useTranslation();
  const orderStatus = orderStatusEnums.find((item) => +item.value === data.new);
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
            <TimelineDot  sx={{backgroundColor:'buttons.shippedDarker'}}/>
            <TimelineConnector sx={{backgroundColor:'buttons.shippedDarker'}} />
          </TimelineSeparator>
          <TimelineContent>
            <Grid container spacing='40px'>
              <Grid item xs={6}>
                <Typography
                  variant='h6'
                  component='h1'
                  sx={{ color: 'primary.dark' }}
                >
                   <StatusText
                    title={t(orderStatus?.label || '')}
                    color={orderStatus?.color || ''}
                  />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ color: 'text.grey' }}
                >
                  {moment(data.changeAt).format('MMM DD, YYYY, h:mm:ss a')}
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
