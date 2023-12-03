

import { SxProps, Theme } from '@mui/material/styles'


export const registerPageContainer = (): SxProps<Theme> => ({
    height: 'calc(100vh - 50px)',
    margin: '0',
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

});

export const registerPage = () : SxProps<Theme> => ({
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    height: 'fit-content',
    padding: '20px',
    flexShrink: 0,
    alignContent: 'center',
    borderRadius: '10px',
    backgroundColor: 'backgroundLight.primary',
});

export const registerPageInner = (): SxProps<Theme> => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1',
    width: '100%',
    height: '100%',

});

export const registerlink = (): SxProps<Theme> => ({
    color: 'accent.primary',
    opacity: '90%',
    textDecoration: 'none',
});