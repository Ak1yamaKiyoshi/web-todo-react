import { SxProps, Theme } from '@mui/material/styles'


export const navbartcontainer = (): SxProps<Theme> => ({
    height: '100%',
    margin: '0',
    width: '100%',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
});

export const navbar = (
): SxProps<Theme> => ({
    backgroundColor: 'backgroundLight.primary',
    height: '50px',
    minHeight: '50px',
    width: '100%',
});

export const children = (
    ): SxProps<Theme> => ({
        backgroundColor: 'backgroundDark.primary',
        height: '100%',
        minHeight: 'calc(100vh - 50px)',
        width: '100%',
});



