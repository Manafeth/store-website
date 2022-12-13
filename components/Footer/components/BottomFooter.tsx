import React from 'react';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import { useCommon } from '../../../contexts/CommonContext';
import Image from 'next/image';
import facebook from '../../../assets/images/icons/facebook.svg';
import instagram from '../../../assets/images/icons/instagram.svg';
import twitter from '../../../assets/images/icons/twitter.svg';
import snapchat from '../../../assets/images/icons/snapchat.svg';
import tikTok from '../../../assets/images/icons/tiktok.svg';
import youtube from '../../../assets/images/icons/youtube.svg';
import linkedin from '../../../assets/images/icons/linkedin.svg';
import telegram from '../../../assets/images/icons/telegram.svg';

const BottomFooter = () => {
    const { storeInfo } = useCommon();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItem: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            {storeInfo.facebook ? (
                <MuiLink href={storeInfo.facebook} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={facebook} alt='facebook' width='23' height='23' />
                </MuiLink>
            ): ( "")}
            {storeInfo.instagram ? (
                <MuiLink href={storeInfo.instagram} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={instagram} alt='instagram' width='22' height='22' />
                </MuiLink>
            ) : ("")}
            {storeInfo.twitter ? (
                <MuiLink href={storeInfo.twitter} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={twitter} alt='twitter' width='22' height='18' />
                </MuiLink>
            ):("")}
            {storeInfo.snapchat ? (
                <MuiLink href={storeInfo.snapchat} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={snapchat} alt='snapchat' width='22' height='18' />
                </MuiLink>
            ):( "" )}
            {storeInfo.tikTok ? (
                <MuiLink href={storeInfo.tikTok} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={tikTok} alt='tikTok' width='22' height='18' />
                </MuiLink>
            ):( "" )}
            {storeInfo.youtube ? (
                <MuiLink href={storeInfo.youtube} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={youtube} alt='youtube' width='22' height='18' />
                </MuiLink>
            ):( "" )}
            {storeInfo.linkedin ? (
                <MuiLink href={storeInfo.linkedin} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={linkedin} alt='linkedin' width='22' height='18' />
                </MuiLink>
            ):( "" )}
            {storeInfo.telegram ? (
                <MuiLink href={storeInfo.telegram} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={telegram} alt='telegram' width='22' height='18' />
                </MuiLink>
            ):("")}
        </Box>
    </Box>
  )
}

export default BottomFooter