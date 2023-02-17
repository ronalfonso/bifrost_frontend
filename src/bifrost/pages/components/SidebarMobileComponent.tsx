import {useContext} from 'react';
import {Sidebar} from 'primereact/sidebar';
import {startLogout} from '../../../store/auth';
import {useAppDispatch} from '../../../store';
import {GeneralContext} from '../../../contexts/GeneralContext';

export const SidebarMobileComponent = () => {
    // @ts-ignore
    const { showSidebar, setShowSidebar } = useContext(GeneralContext);
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={showSidebar} className="w-15rem md:w-20rem lg:w-30rem" onHide={() => setShowSidebar(false)}>
                <div className="content_sidebar">
                    <div className="menu_sidebar">

                    </div>
                    <div className="footer_sidebar" onClick={handleLogout}>
                        <i className="pi pi-sign-out mr-2"></i>
                        <span>Cerrar sessión</span>
                    </div>
                </div>
            </Sidebar>
        </div>
    )
}