import { consultation } from '../../../../../data/data.json';
import './quote.scss';

const Quote = () => {
    return <section class={"consultation__qoute"}>
        <span/>
        <blockquote>
            <h5>{ consultation.qoute[0] }</h5>
            <small>{ consultation.qoute[1] }</small>
        </blockquote>
        <span/>
    </section>
}

export default Quote;