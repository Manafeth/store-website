import React, { FC, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';

import PhoneNumber from './components/PhoneNumber';
import VerifyPhoneNumber from './components/VerifyPhoneNumber';
import CompleteProfile from './components/CompleteProfile';

import rightArrow from '../../assets/images/icons/long-arrow-right.png';
import closeIcon from '../../assets/images/icons/close-icon.png';
import { CodeData } from '../../types/auth';

interface Props {
    open: boolean,
    onClose: () => void
}

const AuthModal: FC<Props> = ({ open, onClose }) => {
    const [tab, setTab] = useState(1);

    const [code, setCode] = useState<CodeData>({
        'field-1': '',
        'field-2': '',
        'field-3': '',
        'field-4': '',
    });

    function handleClose() {
        onClose();
    }

    function handleNext() {
        setTab((prevState) => prevState < 3 ? prevState + 1 : prevState)
    }

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: { width: 660, px: 2 } }}
            anchor='right'
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <IconButton onClick={handleClose}>
                    <Image src={closeIcon} width='24' height='24' alt='close icon' />
                </IconButton>
            </Box>
            <Box sx={{ width: 420, mx: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 'calc(100% - 40px)' }}>
                {tab === 1 && <PhoneNumber />}
                {tab === 2 && (
                    <VerifyPhoneNumber
                        isSubmited={false}
                        code={code}
                        setCode={setCode}
                    />
                )}
                {tab === 3 && <CompleteProfile />}
                <Button
                    variant='contained'
                    endIcon={<Image src={rightArrow} width='16' height='10' alt='right arrow' />}
                    fullWidth
                    onClick={handleNext}
                    sx={{ borderRadius: 2 }}
                >
                    Next
                </Button>
            </Box>
        </Drawer>
    )
}

export default AuthModal