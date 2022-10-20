import React, { ChangeEvent, Dispatch, FC, FocusEvent, KeyboardEvent, SetStateAction } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import validator from 'validator';
import { CodeData, LoginData } from '../../../types/auth';
import { useTranslation } from 'next-i18next';
import { useAuthModal } from '../../../contexts/AuthModalContext';
import LoadingButton from '@mui/lab/LoadingButton';
import { LOADING } from '../../../constants';

interface CodeInputProps {
  error?: boolean;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  onFocus?: (ev: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (ev: KeyboardEvent<HTMLInputElement>) => void;
}

const CodeInput: FC<CodeInputProps> = ({ error, ...props }) => (
  <Input
    disableUnderline
    inputProps={{
      sx: {
        width: 50,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        fontWeight: 'bold',
        fontSize: '14px',
        lineHieght: '20px',
        letterSpacing: '0.4px',
        p: 0,
        textAlign: 'center',
        border: '1px solid',
        borderColor: error ? 'error.main' : '#C6C6C6',
        mr: 4,
        color: '#838383'
      },
    }}
    {...props}
  />
);


interface Props {
    setCode: Dispatch<SetStateAction<CodeData>>;
    code: CodeData;
    isInvalid: boolean;
    login: () => void
    loginData: LoginData;
}

const VerifyPhoneNumber: FC<Props> = ({ setCode, code, isInvalid, login, loginData }) => {
    const { sendPhoneNumberStatus } = useAuthModal();

    const [t] = useTranslation();
    function handleCodeInput(ev: ChangeEvent<HTMLInputElement>) {
        const { value, name } = ev.target;
        if (validator.isNumeric(value) || !value) {
            if (value.length < 2) {
            setCode((prevCode) => ({ ...prevCode, [name]: value }));
            ev.target.select();
            }
            const [, fieldIndex] = name.split('-');

            const fieldIntIndex = parseInt(fieldIndex, 10);
            // Check if no of char in field == maxlength
            if (value.length === 1) {
            // It should not be last input field
            if (fieldIntIndex < 4) {
            // Get the next input field using it's name
                const nextfield = document.querySelector(`input[name=field-${fieldIntIndex + 1}]`);
                // If found, focus the next field
                if (nextfield !== null) {
                // @ts-ignore: Unreachable code error
                nextfield.focus();
                }
            }
            } else if (value.length > 1) {
            const nextfield = document.querySelector(`input[name=field-${value.length < 4 ? fieldIntIndex + 1 : 4}]`);
            setCode((prevCode) => ({
                ...prevCode,
                // @ts-ignore: next line
                ...Array.from(value).reduce((acc, _, index) => (index <= 3 ? { ...acc, [`field-${index + fieldIntIndex}`]: '' } : acc), {}),

            }));
            setCode((prevCode) => ({
                ...prevCode,
                // @ts-ignore: next line
                ...Array.from(value).reduce((acc, item, index) => (index <= 3 ? { ...acc, [`field-${index + fieldIntIndex}`]: item } : acc), {}),
            }));
            if (nextfield !== null) {
            // @ts-ignore: Unreachable code error
                nextfield.focus();
                // @ts-ignore: Unreachable code error
                nextfield.select();
            }
            }
        }
    }
    function handleInputFocus(ev: FocusEvent<HTMLInputElement>) {
        ev.target.select();
    }

    function handleKeyDown(ev: KeyboardEvent<HTMLInputElement>) {
        const key = ev.keyCode || ev.charCode;
        // @ts-ignore
        const { name, value } = ev.target;
        if ((key === 8 || key === 46) && !value) {
            const [, fieldIndex] = name.split('-');
            const fieldIntIndex = parseInt(fieldIndex, 10);
            // eslint-disable-next-line no-template-curly-in-string
            const nextfield = document.querySelector(`input[name=field-${fieldIntIndex - 1}]`);
            if (nextfield !== null) {
            // @ts-ignore: Unreachable code error
            nextfield.focus();
            }
        }
    }

    return (
        <Box>
            <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 2, letterSpacing: '0.1px' }}>
            {t('auth:verifyPhoneNumber')}
            </Typography>

            <Typography variant='h2' sx={{ mb: 1, lineHeight: '30px', letterSpacing: '0.2px' }}>
            {t('auth:verificationCode')}
            </Typography>

            <Typography variant='h6' sx={{ mb: 4, lineHeight: '30px', fontWeight: 500, letterSpacing: '0.2px' }}>
            {t('auth:confirmationMessage')}<Box sx={{fontStyle: 'italic'}}>{loginData.phoneNumber}</Box>
            </Typography>

            <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 2, letterSpacing: '0.1px' }}>
            {t('auth:yourCode')}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <CodeInput
                    onChange={handleCodeInput}
                    onKeyDown={handleKeyDown}
                    name="field-1"
                    value={code['field-1']}
                    onFocus={handleInputFocus}
                    error={isInvalid && !code['field-1']}
                />

                <CodeInput
                    onChange={handleCodeInput}
                    onKeyDown={handleKeyDown}
                    name="field-2"
                    value={code['field-2']}
                    onFocus={handleInputFocus}
                    error={isInvalid && !code['field-2']}
                />

                <CodeInput
                    onChange={handleCodeInput}
                    onKeyDown={handleKeyDown}
                    name="field-3"
                    value={code['field-3']}
                    onFocus={handleInputFocus}
                    error={isInvalid && !code['field-3']}
                />

                <CodeInput
                    onChange={handleCodeInput}
                    onKeyDown={handleKeyDown}
                    name="field-4"
                    value={code['field-4']}
                    onFocus={handleInputFocus}
                    error={isInvalid && !code['field-4']}
                />
            </Box>
            <Typography variant='h5' component='p' sx={{ mb: 5.25, letterSpacing: '0.1px' }}>
            {t('auth:reciveCode')} <LoadingButton loading={sendPhoneNumberStatus === LOADING} sx={{ p: 0, textTransform: 'none', minWidth: 0 }} onClick={login}>{t('auth:resend')}</LoadingButton>
            </Typography>
        </Box>
    )
}

export default VerifyPhoneNumber