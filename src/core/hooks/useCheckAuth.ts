import {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '../../store';
import {db} from '../database/db';
import {login} from '../../store/auth';

export const UseCheckAuth = () => {
    const dispatch = useAppDispatch();
    const {user, status, access_token} = useAppSelector((state) => state.auth);
    const isAuthenticated = useMemo(() => status === 'authenticated', [status]);

    const authChecking = async () => {
        try {
            const resp = await db.authData.toArray();
            if (resp.length === 0 && isAuthenticated) {
                saveLoginUser();
            } else if (resp.length > 0) {
                resp[0].user = JSON.parse(resp[0].user);
                const authInfo = resp[0];
                dispatch(login(authInfo));
            }
        } catch (e) {
            console.error(e)
        }
    }

    const saveLoginUser = async () => {
        try {
            await db.authData.add({
                uuid: user.uuid,
                user: JSON.stringify(user),
                status,
                access_token,
                error: null
            })
        } catch (err) {
            console.error(err);
        }

    }

    useEffect(() => {
        authChecking();
    }, [isAuthenticated]);

    return {
        status
    }
}