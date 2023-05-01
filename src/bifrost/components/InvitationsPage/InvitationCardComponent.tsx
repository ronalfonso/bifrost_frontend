import {useContext} from 'react';
import {Card, CardActions, CardContent, CardHeader, IconButton, Typography} from '@mui/material';
import {Preview, Share} from '@mui/icons-material';
import Box from '@mui/material/Box';
import styles from '../../../styles/style.module.scss';
import {Invitation} from '../../../core/models/invitations/Invitation';
import moment from 'moment';
import {GeneralContext} from '../../../contexts/GeneralContext';


export const InvitationCardComponent = ({invitation}: { invitation: Invitation }) => {
    // @ts-ignore
    const {setIsOpenInvitation, setInvitationSelected} = useContext(GeneralContext);
    const {firsName, lastName, houseNumber, condoName, fromDate, toDate } = invitation;

    const showInvitation = () => {
        setInvitationSelected({...invitation})
        setIsOpenInvitation(true)
    }

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
                                {condoName} - #{houseNumber}
                            </Typography>
                        </span>
                    </Box>

                </CardContent>
                <CardActions disableSpacing>
                    {/*<IconButton aria-label="add to favorites">*/}
                    {/*    <Favorite />*/}
                    {/*</IconButton>*/}
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                    <IconButton onClick={showInvitation} aria-label="share">
                        <Preview />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}