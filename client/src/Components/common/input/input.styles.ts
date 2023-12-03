import { SxProps, Theme } from '@mui/material/styles'
import { getColors } from './utils';
import { InputColor } from './types';
import { Fade } from '@mui/material';

export const input = (
    color: InputColor,
): SxProps<Theme> => ({
    height: '51px',
    width: '347px',
    borderRadius: '10px',
    flexShrink: '0',
    border: '3.8px solid transparent',
    borderColor: getColors(color).borderColor,
    color: getColors(color)
    .textColor,
    transition: 'all 0.15s ease-in-out',
    backgroundColor: getColors(color)
        .backgroundColor,
    fontFamily: 'Ubuntu',
    fontWeight: '500',
    fontSize: '21.3px',
    padding: '0 15px',
    lineHeight:'40px',
    "&:hover": {
        borderColor: getColors(color).hoverBorderColor,
    }
});


export const label = (
    color: InputColor,
): SxProps<Theme> => ({
    color: getColors(color)
    .textColor,
    fontSize: '18px',
    lineHeight: 'normal',
    height: 'fit-content',
    marginBottom: '-15px',
    marginLeft: '20px',
    paddingBottom: '-20px',
    backgroundColor: getColors(color)
    .backgroundColor,
    padding: '0 5px',
    alignSelf: 'flex-start',
    zIndex: 1,
    transition: 'all 0.05s ease-in-out',
    width: 'fit-content',

    "&::before": { display: "none" },
    "&::after": { display: "none" },
})
export const inputWrapper = (): SxProps<Theme> => ({
    display: 'flex', flexDirection: 'column',
})
