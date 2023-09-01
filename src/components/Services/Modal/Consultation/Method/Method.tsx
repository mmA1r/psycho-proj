import { consultation } from '../../../../../data/data.json';
import './method.scss';

const Method = () => {
    return <section class={"consultation__method"}>
        <picture>
            <source 
                srcset="/images/methodPhoto/method.avif"
                type={"image/avif"}
            />
            <source 
                srcset="/images/methodPhoto/method.webp"
                type={"image/webp"}
            />
            <img src={'/images/methodPhoto/method.jpg'} alt={'Книга с методом'} />
        </picture>
        <article>
            <header><h4 class={"method__title"}>{ consultation.methodTitle }</h4></header>
            <p>{ consultation.method }</p>
        </article>
    </section>
}

export default Method;