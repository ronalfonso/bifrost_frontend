import {HeaderComponent} from './components/HeaderComponent';
import {TabPanel, TabView} from 'primereact/tabview';
import {FooterComponent} from './components/FooterComponent';

export const BifrostPage = () => {
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

    return (
        <div className={'main_container'}>
            <div className={'header_container'}>
                <HeaderComponent/>
            </div>
            <div className={'body_container'}>
                <div className={'tabs_container'}>
                    <TabView>
                        {
                            items.map((item) => {
                                return (
                                    <TabPanel key={item.id} header={item.label} leftIcon={`${item.icon} mr-2`}>
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
                                )
                            })
                        }

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