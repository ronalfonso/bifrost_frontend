import {AppRouter} from './router/AppRouter';
import './styles.scss';

export const BifrostApp = () => {
    return (
        <div className={'main'}>
            <AppRouter />
        </div>
    )
}