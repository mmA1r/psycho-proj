import { consultation } from '../../../../../data/data.json';
import './method.scss';

const Method = () => {
    return <section class={"consultation__method"}>
        <article>
            <header><h4 class={"method__title"}>{ consultation.methodTitle }</h4></header>
            <p>{ consultation.method }</p>
        </article>
    </section>
}

export default Method;