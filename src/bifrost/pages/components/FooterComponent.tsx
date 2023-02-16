import {Button} from 'primereact/button';

export const FooterComponent = () => {

    return (
        <div className={'buttons_container'}>
            <div className={`button_content `}>
                <Button icon={'pi pi-user'}
                        className={`p-button-rounded p-button-text`}
                        aria-label="Filter"/>
            </div>
            <div className={`button_content button_content_perfil`}>
                <Button icon={`pi pi-calendar`}
                        className={`p-button-rounded p-button-text `}
                        aria-label="Filter"/>
            </div>

            <div className={`button_content button_content_qr`}>
                <div className="circle">
                    <Button icon={'pi pi-qrcode'}
                            className={`p-button-rounded p-button-text qr-button`}
                            aria-label="Filter"/>
                </div>
            </div>
            <div className={`button_content button_content_frecuentes`}>
                <Button icon={'pi pi-book'}
                        className={`p-button-rounded p-button-text`}
                        aria-label="Filter"/>
            </div>
            <div className={`button_content `}>
                <Button icon={`pi pi-stopwatch`}
                        className={`p-button-rounded p-button-text `}
                        aria-label="Filter"/>
            </div>
        </div>
    )
};