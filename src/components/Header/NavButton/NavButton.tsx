import type { FunctionComponent } from 'preact';

import './navButton.scss';

export enum ButtonTitles {
    about = 'Обо мне',
    services = 'Услуги',
    contacts = 'Контакты'
}

interface NavButton { type: ButtonTitles }

const NavButton: FunctionComponent<NavButton> = ({ type }) => {

    const linkTo = (
        type === ButtonTitles.about ? '#about' :
        type === ButtonTitles.services ? '#services' : '#contacts'
    );

    return (
        <li class="list__item">
            <a
                class="header__anchor"
                tabIndex={0}
                href={linkTo}
            >
                <svg class="move-to-arrow"><use xlinkHref="#move-to-arrow"></use></svg>
                { type }
            </a>
        </li>
    );
}

export default NavButton;