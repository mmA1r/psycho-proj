import type { FunctionComponent } from 'preact';
import { consultation } from '../../../../../data/data.json';

import './guarantees.scss';

interface Guarantee { header: string, text: string }

const Guarantee: FunctionComponent<Guarantee> = ({ header, text }) => {
    return (
        <li class={"consultation__guarantee"}>
            <h4>{ header }</h4>
            <p>{ text }</p>
        </li>
    );
}

const Guarantees = () => {

    const guarantees = consultation.gurantees.map(type => <Guarantee header={type.title} text={type.text} />);

    return <section class={"consultation__guarantees"}>
        <h3 class={"introduction__title"}>{ consultation.guarateesTitle }</h3>
        <ul>
            { guarantees }
        </ul>
    </section>
}

export default Guarantees;