import type { FunctionComponent } from 'preact';
import { consultation } from '../../../../../data/data.json';

import './requests.scss';

interface Request { data: string }

const Request: FunctionComponent<Request> = ({ data }) => {
    return (
        <li class={"consultation__request"}>
            { data }
        </li>
    );
}

const Requests = () => {

    const requests = consultation.types.map(type => <Request data={type} />);

    return <section class={"consultation__requests"}>
        <h3 class={"introduction__title"}>{ consultation.typesTitle }</h3>
        <ul> { requests } </ul>
    </section>
}

export default Requests;