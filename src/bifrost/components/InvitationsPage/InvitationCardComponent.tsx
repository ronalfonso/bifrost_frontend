import {useContext} from 'react';
import {GeneralContext} from '../../../contexts/GeneralContext';
import {Card, CardActions, CardContent, CardHeader, IconButton, Typography} from '@mui/material';
import {Preview, Share} from '@mui/icons-material';
import Box from '@mui/material/Box';
import {Invitation} from '../../../core/models/invitations/Invitation';
import moment from 'moment';
import styles from '../../../styles/style.module.scss';
import {useTranslation} from "react-i18next";


export const InvitationCardComponent = ({invitation}: { invitation: Invitation }) => {
    // @ts-ignore
    const {setIsOpenInvitation, setInvitationSelected} = useContext(GeneralContext);
    const {
        firstName,
        lastName,
        houseNumber,
        condoName,
        fromDate,
        toDate,
        isActive
    } = invitation;
    console.log({invitation});
    const showInvitation = () => {
        setInvitationSelected({...invitation})
        setIsOpenInvitation(true)
    }
    const {t} = useTranslation();

    return (
        <>
            <Card sx={{
                maxWidth: 350,
                borderLeft: `4px solid ${styles.colorInfo}`,
                backgroundColor: !isActive && styles.borderColor
            }}>
                <CardHeader
                    sx={{padding: '.75rem'}}
                    title={
                        <Typography
                            sx={{fontSize: 13, fontWeight: 'bold', letterSpacing: '0.05em'}}>
                            {firstName} {lastName}
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
                                {t('INVITATIONS_FORM.TIME_RANGE')}:
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
                                {t('INVITATIONS_FORM.INVITATION_TO')}:
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
                        <Share/>
                    </IconButton>
                    <IconButton onClick={showInvitation} aria-label="share">
                        <Preview/>
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}