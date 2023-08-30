import { contacts, contactsTitle } from '../../data/data.json';
import LinksList from './LinksList/LinksList';
import './contacts.scss';

const Contacts = (props:any) => {
    const text = Object.values(contacts).map(value => value.map((val, index) => {
        return index === 0 ? <p class="contacts_paragraph"><strong>{ val }</strong></p>
        : <p class="contacts_paragraph">{ val }</p>
    }));
    
    return (
        <footer id="contacts" class="contacts">
            <h2 class="contacts__title">{ contactsTitle }</h2>
            <address class="contacts__information">
                <div className="contacts__text">
                    { text }
                </div>
                <LinksList/>
            </address>
            <div class="contacts__svg-wrapper">
                { props.lotus }
            </div>
        </footer>
    );
}

export default Contacts;