import { InputColor, InputColorsMap, InputColors } from "../types";


const InputColorsMap: InputColorsMap = {
    [InputColor.DARK]: {
        backgroundColor: 'accent.primary',
        borderColor: 'textLight.primary',
        textColor: 'textLight.primary',
        hoverBorderColor: 'main.primary',
    },
    [InputColor.LIGHT]: {
        backgroundColor: 'primary.main',
        borderColor: 'transparent',
        textColor: 'textDark.primary',
        hoverBorderColor: 'accent.primary',
    },
    [InputColor.INVERSE]: {
        backgroundColor: 'backgroundDark.primary',
        borderColor: 'backgroundLight.primary',
        textColor: 'textLight.primary',
        hoverBorderColor: 'accent.primary',
    },
    [InputColor.WHITE]: {
        backgroundColor: 'backgroundLight.primary',
        borderColor: 'backgroundDark.primary',
        textColor: 'backgroundDark.primary',
        hoverBorderColor: 'accent.primary',
    },
}

export const getColors = (
    color: InputColor,
): InputColors => InputColorsMap[color];