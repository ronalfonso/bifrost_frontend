import {Card, CardActions, CardContent, CardHeader, IconButton, Typography} from '@mui/material';
import {Favorite, Preview, QrCode, Share} from '@mui/icons-material';
import Box from '@mui/material/Box';
import styles from '../../../styles/style.module.scss';
import {Invitation} from '../../../core/models/invitations/Invitation';
import moment from 'moment';


export const InvitationCardComponent = ({invitation}: { invitation: Invitation }) => {
    console.log(invitation);
    const {firsName, lastName, houseNumber, condoName, fromDate, toDate } = invitation;
    return (
        <>
            <Card sx={{maxWidth: 350, borderLeft: `4px solid ${styles.colorInfo}`}}>
                <CardHeader
                    sx={{padding: '.75rem'}}
                    title={
                        <Typography
                            sx={{fontSize: 13, fontWeight: 'bold', letterSpacing: '0.05em'}}>
                            {firsName} {lastName}
                        </Typography>
                    }
                    subheader={
                        <Typography
                            sx={{fontSize: 13, letterSpacing: '0.05em'}}>
                            {moment(fromDate).format('DD/MM/YYYY')}
                        </Typography>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <QrCode/>
                        </IconButton>
                    }
                />
                <CardContent
                    className={'card-content'}
                    sx={{padding: '0 .75rem', fontSize: 13}}
                >
                    <Box>
                        <label>
                            <Typography sx={{color: styles.blackSecondary, fontSize: 12}}>
                                Rango horario:
                            </Typography>
                        </label>
                        <span>
                            <Typography sx={{color: styles.blackPrimary, fontSize: 11}}>
                            {moment(fromDate).format('hh:mm a')} - {moment(toDate).format('hh:mm a')}
                            </Typography>
                        </span>
                    </Box>

                    <Box>
                        <label>
                            <Typography sx={{color: styles.blackSecondary, fontSize: 12}}>
                                Invitación a:
                            </Typography>
                        </label>
                        <span>
                            <Typography sx={{color: styles.blackPrimary, fontSize: 11}}>
                                {condoName.toUpperCase()} - #{houseNumber}
                            </Typography>
                        </span>
                    </Box>

                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Favorite />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Preview />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}