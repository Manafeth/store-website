import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Image from 'next/image';
import closeIcon from '../../../../assets/images/icons/close-icon.png';

const TagFilter = () => {
  const [tags, setTags] = useState<string[]>([]);
  const addTags = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };
  function handleClose(i: any) {
    setTags(tags.filter((tag, index) => index !== i));
    console.log('filter', setTags(tags.filter((tag, index) => index !== i)));
  }

  return (
    <Box>
      <Typography
        variant='h6'
        component='h1'
        sx={{ color: 'text.primary', fontWeight: '700', fontSize: '16px' }}
      >
        Popular Tags
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {tags.map((tag, index) => (
          <Button
            variant='outlined'
            sx={{ width: 'auto', height: '44px' }}
            type='submit'
            key={index}
            endIcon={
              <Image
                src={closeIcon}
                width='24'
                height='24'
                alt='close icon'
                onClick={handleClose}
              />
            }
          >
            {tag}
          </Button>
        ))}
      </Box>
      <Input
        id='tag-filter'
        type='text'
        onKeyUp={(event) => addTags(event)}
        placeholder='Add a tag'
      />
    </Box>
  );
};

export default TagFilter;
