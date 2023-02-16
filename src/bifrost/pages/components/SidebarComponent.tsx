import {Sidebar} from 'primereact/sidebar';
import {startLogout} from '../../../store/auth';
import {useAppDispatch} from '../../../store';
import {useState} from 'react';

export const SidebarComponent = () => {
    const dispatch = useAppDispatch();
    const [visible, setVisible] = useState<boolean>(false);
    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} className="w-15rem md:w-20rem lg:w-30rem" onHide={() => setVisible(false)}>
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