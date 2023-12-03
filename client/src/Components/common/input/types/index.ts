export enum InputColor {
    DARK = 'dark',
    LIGHT = 'light',
    WHITE = 'white',
    INVERSE = 'inverse',
}

interface InputColors {
    backgroundColor: string;
    borderColor: string;
    textColor: string;
    hoverBorderColor: string;
}

export type InputColorsMap = {
    [InputColor.DARK]: InputColors;
    [InputColor.LIGHT]: InputColors;
    [InputColor.INVERSE]: InputColors;
    [InputColor.WHITE]: InputColors;
}
