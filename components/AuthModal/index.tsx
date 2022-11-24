import React, { FC, FormEvent, useEffect, useState } from 'react';
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
import { CodeData, LoginData, ProfileData } from '../../types/auth';
import { useAuthModal } from '../../contexts/AuthModalContext';
import isEmail from 'validator/lib/isEmail';
import LoadingButton from '@mui/lab/LoadingButton';
import useTranslation from "next-translate/useTranslation";
import { LOADING, SUCCESS } from '../../constants';
import { useCommon } from '../../contexts/CommonContext';

interface Props {

}

const AuthModal: FC<Props> = () => {
    const {
        openAuthModal,
        handleCloseAuthModal,
        sendPhoneNumber,
        verifyPhoneNumber,
        updateAccountData,
        sendPhoneNumberStatus,
        verifyStatus,
        updateProfileStatus,
        userData
    } = useAuthModal();
    const [tab, setTab] = useState(1);
    const {t} = useTranslation('common');
    const [isInvalid, setIsInvalid] = useState(false);
    const { storeInfo } = useCommon()
    const [loginData, setLoginData] = useState<LoginData>({
        countryId: 0,
        phoneNumber: ''
    });

    const [code, setCode] = useState<CodeData>({
        'field-1': '',
        'field-2': '',
        'field-3': '',
        'field-4': '',
    });

    const [accountData, setAccountData] = useState<ProfileData>({
        fullName: '',
        email: '',
        image: null
    })

    function handleClose() {
        handleCloseAuthModal();
        setTab(1);
        setLoginData({
            countryId: 0,
            phoneNumber: ''
        })
        setCode({
            'field-1': '',
            'field-2': '',
            'field-3': '',
            'field-4': '',
        })

        setAccountData({
            fullName: '',
            email: '',
            image: null
        })
    }

    function login() {
        sendPhoneNumber(loginData).then(() => {
            setIsInvalid(false);
        }).catch(() => {
            setIsInvalid(false);
        });
    }

    function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        if (tab === 1) {
            if (loginData.phoneNumber && loginData.countryId) {
                login()
            } else {
                setIsInvalid(true)
            }
            
        } else if (tab === 2) {
            // @ts-ignore: Unreachable code error
            if (Object.keys(code).reduce((acc, item) => acc + code[item], '').length === 4) {
                // @ts-ignore: Unreachable code error
                const varificationCode = Object.keys(code).reduce((acc, item) => acc + code[item], '');
                verifyPhoneNumber({
                    ...loginData,
                    otp: varificationCode
                }).then(() => {
                    setIsInvalid(false);
                }).catch((err) => {
                    setIsInvalid(false);
                });
            } else {
                setIsInvalid(true)
            }
        } else if (tab === 3) {
            if (accountData.fullName && (accountData.email ? isEmail(accountData.email) : true)) {
                updateAccountData(accountData).then(() => {
                    setIsInvalid(false);
                    setAccountData((prevState) => ({
                        ...prevState,
                        image: null
                    }));
                }).catch(() => {
                    setIsInvalid(false);
                })
            } else {
                setIsInvalid(true)
            }
        }
    }

    useEffect(() => {
      if (sendPhoneNumberStatus === SUCCESS)
        setTab(2)
    }, [sendPhoneNumberStatus])
    
    useEffect(() => {
        if (verifyStatus === SUCCESS) {
            setLoginData({
                countryId: 0,
                phoneNumber: ''
            })
            setCode({
                'field-1': '',
                'field-2': '',
                'field-3': '',
                'field-4': '',
            })

            if(!userData.isCompleteProfile) {
                setTab(3);
            } else {
                handleClose();
            }
        }
    }, [verifyStatus])

    useEffect(() => {
        if (updateProfileStatus === SUCCESS)
            handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateProfileStatus])
    
    return (
        <Drawer
            open={openAuthModal}
            onClose={handleClose}
            PaperProps={{ sx: { width: 660, px: 2 } }}
            anchor='right'
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <IconButton onClick={handleClose}>
                    <Image src={closeIcon} width='24' height='24' alt='close icon' />
                </IconButton>
            </Box>
            <Box
                sx={{ width: 420, mx: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 'calc(100% - 40px)' }}
                component='form'
                onSubmit={handleSubmit}
            >
                {tab === 1 && (
                    <PhoneNumber
                        loginData={loginData}
                        setLoginData={setLoginData}
                        isInvalid={isInvalid}
                    />
                )}
                {tab === 2 && (
                    <VerifyPhoneNumber
                        loginData={loginData}
                        isInvalid={isInvalid}
                        code={code}
                        setCode={setCode}
                        login={login}
                    />
                )}
                {tab === 3 && (
                    <CompleteProfile
                        accountData={accountData}
                        setAccountData={setAccountData}
                        isInvalid={isInvalid}
                    />
                )}
                <LoadingButton
                    variant='contained'
                    endIcon={<Image src={rightArrow} width='16' height='10' alt='right arrow' />}
                    fullWidth
                    sx={{ borderRadius: 2 , backgroundColor: storeInfo.buttonColor, color:storeInfo.buttonTitelColor,
                        "&:hover": {
                            backgroundColor: "primary.hover"
                          }}}
                    type="submit"
                    loading={[sendPhoneNumberStatus, verifyStatus, updateProfileStatus].includes(LOADING)}
                >
                    {t('next')}
                </LoadingButton>
            </Box>
        </Drawer>
    )
}

export default AuthModal