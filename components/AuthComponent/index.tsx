import { useRouter } from 'next/router';
import React, { FC, ReactElement, useEffect } from 'react'
import paths from '../../constants/paths';
import { useAuthModal } from '../../contexts/AuthModalContext';
import getAccessToken from '../../utils/getToken';

interface Props {
    children: ReactElement | ReactElement[]
}

const AuthComponent: FC<Props> = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        if (!getAccessToken()) 
            router.push(paths.home)
    }, [router])

    return (
        <>
            {children}
        </>
    )
}

export default AuthComponent