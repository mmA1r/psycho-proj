import type { FunctionComponent } from 'preact';
import { useRef } from 'preact/hooks';
import { nailTherapy, consultation } from '../../../data/data.json';

import './serviceButton.scss';

export enum ServiceTypes {
    nail = 'nail',
    consultation = 'consultation'
}

interface IServiceButton { open: Function, type: ServiceTypes, } 

const ServiceButton: FunctionComponent<IServiceButton> = ({ open, type }) => {
    const button = useRef<HTMLButtonElement>(null);

    const isNail = type === ServiceTypes.nail ? true : false;
    const title = isNail ? nailTherapy.title[0] : consultation.title[0];
    const subTitle = isNail ? nailTherapy.title[1] : consultation.title[1];
    const classPrefix = isNail ? 'nail' : 'consultation';

    const onClickHandler = () => {
        open();
        document.body.classList.add('scroll-lock');
    }

    return (
        <li class="service__item">
            <button
                disabled={false}
                class={"service__button " + "service__" + classPrefix + "-button"}
                type="button"
                ref={button}
                onClick={onClickHandler}
            >
                <h3 class="service__sub-title">{ title }</h3>
                { subTitle }
            </button>
            <svg class={"service-button-svg " + "service__" + classPrefix + "-svg"}><use xlinkHref="#move-to-arrow"></use></svg>
        </li>
    );
}

export default ServiceButton;