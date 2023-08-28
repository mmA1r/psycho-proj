import Telegram from '../../../svg/Telegram/Telegram';
import Whatsapp from '../../../svg/Whatsapp/Whatsapp';
import YouTube from '../../../svg/YouTube/YouTube';

import './linksList.scss';

enum links {
    telegram = 'telegram',
    youtube = 'youtube',
    whatsapp = 'whatsapp'
}

const items = Object.values(links).map(link => {
    const svg = (
        link === links.telegram ? <Telegram /> :
        link === links.youtube ? <YouTube /> : <Whatsapp /> 
    );
    const href = (
        link === links.telegram ? 'https://t.me/es8matveeva' :
        link === links.youtube ? 'https://youtube.com/@ekaterina8matveeva' : 'https://wa.me/79829932579'
    );
    return (
        <li class="links-list__item">
            <a 
                class="contacts-links__link"
                href={href}
            >
                { svg }
            </a>
        </li>
    );
});

const LinksList = () => <ul class="contacts__links-list"> { items } </ul>;


export default LinksList;