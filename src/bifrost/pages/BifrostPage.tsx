import {useContext, useEffect, useState} from "react";
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import {TabHomeComponent} from "./home/TabHomeComponent";
import {RoleEnum} from "../../store/auth/enum/role.enum";
import {useAppSelector} from "../../store";
import HomeSurveillanceComponent from "./home/HomeSurveillanceComponent";
import {GeneralContext} from "../../contexts/general/GeneralContext";
import {LoadingComponent} from "../../core/shared/ui/components/LoadingComponent";


export const BifrostPage = () => {
    const {isLoading} = useContext<any>(GeneralContext);
    const {user} = useAppSelector((state) => state.auth);
    const [role, setRole] = useState('');

    useEffect(() => {
        if (user !== null) {
            setRole(user.role.name)
        }
    }, [user]);

    return (
        <>
            <PageWrapper title={'Home'}>
                {
                    role !== RoleEnum.VIGILANT &&
                    <TabHomeComponent/>
                }
                {
                    role === RoleEnum.VIGILANT &&
                    <HomeSurveillanceComponent/>
                }
                {
                    isLoading &&
                    <LoadingComponent />
                }
            </PageWrapper>
        </>

    )
}

export default BifrostPage;