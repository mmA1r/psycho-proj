import { useRef } from 'preact/hooks';
import NextPageArrow from '../../svg/NextPageArrow/NextPageArrow';
import ServiceButton, { ServiceTypes } from './ServiceButton/ServiceButton';
import { servicesTitle } from '../../data/data.json';

import './services.scss';
import Modal from './Modal/Modal';

const Services = (children: any) => {
    const nailTherapy = useRef<HTMLDialogElement>(null);
    const consultation = useRef<HTMLDialogElement>(null);

    const openNail = () => nailTherapy.current?.showModal();
    const openConusltation = () => consultation.current?.showModal();

    return (
        <section id="services" class="services">
            <div class={"blur-block blur-block_left"} />
            <h2 class="services__title">{ servicesTitle }</h2>
            <nav class="servicers__navigation">
                <ul class="servicers__navigation-list">
                    <ServiceButton open={openConusltation} type={ ServiceTypes.consultation } />
                    <ServiceButton open={openNail} type={ ServiceTypes.nail }/>
                </ul>
            </nav>
            <a  tabIndex={0}
                class="next-page-button services__anchor"
                href="#contacts"
                aria-label={"Страница контакты"}
            > <NextPageArrow/> </a>
            <div class={"blur-block blur-block_right"} />
            <Modal type={ServiceTypes.nail} children={children} ref={nailTherapy} />
            <Modal type={ServiceTypes.consultation} children={children}  ref={consultation} />
        </section>
    );
}

export default Services;