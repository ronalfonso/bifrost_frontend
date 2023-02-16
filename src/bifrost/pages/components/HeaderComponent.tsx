import {useAppSelector} from '../../../store';
import moment from 'moment';
import logoWhite from '../../../assets/img/bifrost_color.png'


export const HeaderComponent = () => {
    const { user } = useAppSelector((state) => state.auth);
    const initial = user.username.substring(0, 1).toUpperCase()
    const name = user.username.substring(0, 1).toUpperCase() + user.username.substring(1, user.username.length)
    const now = moment().format('DD-MM-YYYY').toString()

    return (
        <>
            <div className={'left'}>
                <div className="back">

                </div>
            </div>
            <div className={'center'}>
                <div className="username">
                    <h5>Bienvenido</h5>
                    <h3>{name}</h3>
                </div>
            </div>
            <div className="right">
                <div className="content_img">
                    <img src={logoWhite} width={'35px'}/>
                </div>
            </div>
        </>
    )
}