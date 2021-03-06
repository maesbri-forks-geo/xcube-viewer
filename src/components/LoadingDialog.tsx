import * as React from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

import { WithLocale } from '../util/lang';
import { I18N } from '../config';


const styles = (theme: Theme) => createStyles(
    {
        progress: {
            margin: theme.spacing(2),
        },
        message: {
            margin: theme.spacing(1),
        },
        contentContainer: {
            margin: theme.spacing(1),
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
    });

interface LoadingDialogProps extends WithStyles<typeof styles>, WithLocale {
    messages: string[];
}

const LoadingDialog: React.FC<LoadingDialogProps> = ({classes, messages}) => {

    if (messages.length === 0) {
        return null;
    }

    return (
        <Dialog open={true} aria-labelledby="loading">
            <DialogTitle id="loading">{I18N.get('Please wait...')}</DialogTitle>
            <div className={classes.contentContainer}>
                <CircularProgress className={classes.progress}/>
                {messages.map((message, i) => (
                    <Typography component="div" key={i}
                                className={classes.message}>{message}</Typography>
                ))}
            </div>
        </Dialog>
    );
};

export default withStyles(styles)(LoadingDialog);

