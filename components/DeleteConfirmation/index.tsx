import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import useTranslation from 'next-translate/useTranslation';

interface Props {
    open: boolean;
    onClose: () => void;
    name?: string;
    handleRemove: () => void;
    loading?: boolean;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 345,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  textAlign: 'center',
};

const DeleteConfirmationMdoal: FC<Props> = ({ open, onClose, name, handleRemove, loading }) => {
  const {t} = useTranslation('common');
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h3">
        {t('removeAlert')}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 4 }}>
        {t('areYouSure')} 
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mr: 3 }}
            onClick={onClose}
          >
           {t('no')}
          </Button>
          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={handleRemove}
            disabled={loading}
            sx={{ py: loading ? '9px' : '14px' }}
          >
            {loading ? <CircularProgress size={25} color="info" /> : t('yes')}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmationMdoal;
