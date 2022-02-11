import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: 'max-content',
        position: 'relative',
    },
    colorPickerButton: {
        margin: 0,
        zIndex: 2,
        top: '50%',
        right: '4%',
        position: 'absolute',
        transform: 'translateY(-50%)'
    },});
