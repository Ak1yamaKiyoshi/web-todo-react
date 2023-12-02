

import { SxProps, Theme } from '@mui/material/styles'


export const loginPageContainer = (): SxProps<Theme> => ({
    height: 'calc(100vh - 50px)',
    margin: '0',
    width: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const loginPage = () : SxProps<Theme> => ({
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    height: '400px',
    padding: '20px',
    flexShrink: '0',
    backgroundColor: 'backgroundLight.primary',
});