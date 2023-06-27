import {useContext, useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '../../store';
import {db} from '../database/db';
import {login} from '../../store/auth';
import {GeneralContext} from '../../contexts/general/GeneralContext';
import {startGetResident} from '../../store/residents';
import {RoleEnum} from "../../store/auth/enum/role.enum";
import {startGetCondo} from "../../store/condos";

export const UseCheckAuth = () => {
    const { setIsLoading } = useContext<any>(GeneralContext);
    const dispatch = useAppDispatch();
    const {user, status, access_token} = useAppSelector((state) => state.auth);
    const isAuthenticated = useMemo(() => status === 'authenticated', [status]);

    const authChecking = async () => {
        try {
            setIsLoading(true)
            const resp = await db.authData.toArray();
            if (resp.length === 0 && isAuthenticated) {
                saveLoginUser();
            } else if (resp.length > 0) {
                resp[0].user = JSON.parse(resp[0].user);
                const authInfo = resp[0];
                dispatch(login(authInfo));
                if (authInfo.user['role'].name === RoleEnum.RESIDENT) {
                    dispatch(startGetResident())
                }
                if (authInfo.user['role'].name === RoleEnum.CONDO) {
                    dispatch(startGetCondo())
                }
                setIsLoading(false)
            }
        } catch (e) {
            console.error(e)
            setIsLoading(false)
        }
    }

    const saveLoginUser = async () => {
        try {
            await db.authData.add({
                uuid: user.id,
                user: JSON.stringify(user),
                status,
                access_token,
                error: null
            })
            setIsLoading(false)
        } catch (err) {
            console.error(err);
            setIsLoading(false)
        }

    }

    useEffect(() => {
        authChecking();
    }, [isAuthenticated]);

    return {
        status
    }
}