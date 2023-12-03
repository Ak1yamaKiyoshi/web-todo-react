import React, { FC, MouseEventHandler, ReactNode } from 'react';
import { Button as MuiButton } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import * as styles from './input.styles';
import { ButtonColor, ButtonSize, ButtonTextColor, ButtonVariant, InputColor } from './types';
import mergeSx from 'merge-sx';
import Typography from '@mui/material/Typography'
import { Input as InputMui, Box }  from '@mui/material';

interface InputProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    sx?:SxProps<Theme>,
    color?: InputColor;
    textLabel?: string;
    textPlaceholder?: string;
}

const Input: FC<InputProps> =({
    onChange,
    sx = {},
    color = InputColor.WHITE,
    textLabel = 'test',
    textPlaceholder='as',
    ...rest
}) => {

    return (
        <Box sx={mergeSx(styles.inputWrapper(), sx)}>
                <Typography variant='pRegular' sx={styles.label(color)}> {textLabel} </Typography>
                <InputMui
                    placeholder={textPlaceholder}
                    disableUnderline={true}
                    sx={styles.input(color)}
                    onChange={onChange}
                    {...rest}
                />
        </Box>
    );
};

export default Input;