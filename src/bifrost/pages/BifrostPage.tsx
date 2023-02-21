import {HeaderComponent} from './components/HeaderComponent';
import {TabPanel, TabView} from 'primereact/tabview';
import {FooterComponent} from './components/FooterComponent';
import {useContext, useEffect} from 'react';
import {useAppSelector} from '../../store';
import {getHomeResidents} from '../../store/residents/api/residents.service';
import {GeneralContext} from '../../contexts/GeneralContext';

export const BifrostPage = () => {
    // @ts-ignore
    const { isLoading } = useContext(GeneralContext);
    const {user, status, access_token} = useAppSelector((state) => state.auth);
    const items = [
        {id: 1, label: 'Hogares', icon: 'pi pi-fw pi-home'},
        {id: 2, label: 'Sociales', icon: 'pi pi-fw pi-users'},
        {id: 3, label: 'Invitaciones', icon: 'pi pi-fw pi-calendar'},
    ]

    const homes = [
        {numberHouse: 28, condo: 'Arenas del sol', description: 'Casa principal'},
        {numberHouse: 41, condo: 'Valle alto', description: 'Padres Ronald'},
        {numberHouse: 12, condo: 'San miguel', description: 'Papas Yari'},
    ]

    const _getResidentHome = async () => {
        getHomeResidents(user.id).then(resp => {
            console.log(resp);
        })

    }

    useEffect(() => {
        console.log(isLoading);
        if (isLoading === false){
            _getResidentHome()
        }

    }, [isLoading]);


    return (
        <div className={'main_container'}>
            <div className={'header_container'}>
                <HeaderComponent/>
            </div>
            <div className={'body_container'}>
                <div className={'tabs_container'}>
                    <TabView>
                        <TabPanel header={'Hogares'} leftIcon={`pi pi-fw pi-home mr-2`}>
                            {
                                homes.map( (home) => {
                                    return (
                                        <div key={home.numberHouse} className="content_card">
                                            <div className="header_card">
                                                <div className={'home_number'}>{home.numberHouse}</div>
                                            </div>
                                            <div className="body_card">
                                                <div className={'description'}>{home.description}</div>
                                                <div className={'condo'}>{home.condo}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </TabPanel>

                        <TabPanel header={'Sociales'} leftIcon={`pi pi-fw pi-users mr-2`}>
                            {
                                homes.map( (home) => {
                                    return (
                                        <div key={home.numberHouse} className="content_card">
                                            <div className="header_card">
                                                <div className={'home_number'}>{home.numberHouse}</div>
                                            </div>
                                            <div className="body_card">
                                                <div className={'description'}>{home.description}</div>
                                                <div className={'condo'}>{home.condo}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </TabPanel>

                        <TabPanel header={'Invitaciones'} leftIcon={`pi pi-fw pi-calendar mr-2`}>
                            invitaciones

                        </TabPanel>

                    </TabView>
                </div>
            </div>
            <div className={'footer_container'} >
               <FooterComponent />
            </div>
        </div>
    )
}

export default BifrostPage;