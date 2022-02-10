import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: 'max-content',
    },
    colorPickerButton: {
        margin: 6
    },
    embeddedRoot: {
        display: 'flex',
        flexDirection: 'row',
        width: 'max-content',
        position: 'relative',
    },
    embeddedColorPickerButton: {
        margin: 0,
        zIndex: 2,
        top: '50%',
        right: '2%',
        position: 'absolute',
        transform: 'translateY(-50%)'
    },});
