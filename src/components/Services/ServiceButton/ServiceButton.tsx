import { useRef } from 'preact/hooks';
import type { FunctionComponent } from 'preact';
import { nailTherapy, consultation } from '../../../data/data.json';
import './serviceButton.scss';

export enum ServiceTypes {
    nail = 'nail',
    consultation = 'consultation'
}

interface ServiceButton { type: ServiceTypes }

const ServiceButton: FunctionComponent<ServiceButton> = ({ type }) => {
    const button = useRef<HTMLButtonElement>(null);

    const isNail = type === ServiceTypes.nail ? true : false;
    const title = isNail ? nailTherapy.title[0] : consultation.title[0];
    const subTitle = isNail ? nailTherapy.title[1] : consultation.title[1];
    const classPrefix = isNail ? 'nail' : 'consultation';

    const onSvgClick = () => button.current ? button.current.click() : null;

    return (
        <li class="service__item">
            <button
                class={"service__button " + "service__" + classPrefix + "-button"}
                type="button"
                ref={button}
            >
                <h3 class="service__sub-title">{ title }</h3>
                { subTitle }
            </button>
            <svg onClick={onSvgClick} class={"service-button-svg " + "service__" + classPrefix + "-svg"}><use xlinkHref="#move-to-arrow"></use></svg>
        </li>
    );
}

export default ServiceButton;