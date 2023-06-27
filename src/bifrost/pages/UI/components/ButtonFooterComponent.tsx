import {useLocation, useNavigate} from 'react-router-dom';

export const ButtonFooterComponent = ({button}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const {path, Component, name} = button;

    const activePage = (page: string) => {
        return location.pathname === page.substring(2);
    }

    return (
        <li className={`list ${activePage(path) ? 'li--active' : ''}`}
            onClick={() => {
                window.localStorage.setItem('pathPrev', path.substring(2));
                navigate(path)
            }}>
            <div className={'button-nav'}>
                <span className={'icon'}> {Component}</span>
                <span className={'text'}>{name}</span>
            </div>
        </li>
    )
}