import type { FunctionComponent } from 'preact';
import type { JSXInternal } from 'preact/src/jsx';
import { therapySignInTitle, mediaSubTitle, links } from '../../../data/data.json';
import Telegram from '../../../svg/Telegram/Telegram';
import Whatsapp from '../../../svg/Whatsapp/Whatsapp';
import YouTube from '../../../svg/YouTube/YouTube';

import './links.scss';

interface Links { type: number }

const Links: FunctionComponent<Links> = ({ type }) => {
    const title =  type === 1 ? mediaSubTitle : therapySignInTitle;
    const types = type === 1 ? links.media : links.therapy;

    const svg: [string, JSXInternal.Element][] = [ ['Ссылка на telegram', <Telegram />], type === 1 ?['Ссылка на youtube', <YouTube />] : ['Ссылка на whatsapp', <Whatsapp />] ];

    const items = Object.values(types).map((type, index) =>
        <li class={"links-list__item"}>
            <a
                aria-label={svg[index][0]}
                class={"contacts-links__link"}
                href={type}
            >
                { svg[index][1] }
            </a>
        </li>
    );
        
    return (
        <address class={"contacts__link-wrapper"}>
            <h5 class={"links__title"}>{ title }</h5>
            <ul class={"contacts__links-list"}>
                <span/>
                { items }
                <span/>
            </ul>
        </address>
    );
}


export default Links;