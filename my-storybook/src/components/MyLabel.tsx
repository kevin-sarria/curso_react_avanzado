import './MyLabel.css';

type SizeLabel = 'normal' | 'h1' | 'h2' | 'h3';
type ColorLabel = 'text-primary' | 'text-secondary' | 'text-tertiary';

interface Props {
    /**
     * Text to display
     */
    label: string;

    /**
     * Label size
     */
    size?: SizeLabel;
    /**
     * Capitalize All letters
     */
    allCaps?: boolean;
    /**
     * Label Color
     */
    color?: ColorLabel;
    /**
     * Font Color
     */
    fontColor?: string;
}

/**
 * ! Todas son opcionales
 * allCaps: boolean,
 * color: 'text-primary' | 'text-secondary' | 'text-tertiary',
 * fontColor?: string, Texto del span
 */

export const MyLabel = (
    {
        label,
        size = 'normal',
        allCaps = false,
        color,
        fontColor
    }: Props) => {
  return (
    <span
        className={`label ${size} ${color}`}
        style={{
            color: `${fontColor ? fontColor : 'black'}`
        }}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}

/* ${ allCaps ? 'text-uppercase' : '' } */