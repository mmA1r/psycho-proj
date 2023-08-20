import MoveToArrow from '../../svg/MoveToArrow/MoveToArrow';
import NavButton, { ButtonTitles } from './NavButton/NavButton';
import './header.scss';

const Header = () => {
    return (
        <header class="header" >
            <nav class="header__navigation-menu">
                <ul class="header__navigation-list">
                    <NavButton type={ ButtonTitles.about }/>
                    <NavButton type={ ButtonTitles.services }/>
                    <NavButton type={ ButtonTitles.contacts }/>
                </ul>
            </nav>
            <div hidden class="hiden-svg-init"><MoveToArrow isTrace={false} viewBox="5 -5 40 40"/></div>
        </header>
    );
}

export default Header;