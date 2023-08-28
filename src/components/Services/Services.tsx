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
            <h2 class="services__title">{ servicesTitle }</h2>
            <nav class="servicers__navigation">
                <ul class="servicers__navigation-list">
                    <ServiceButton open={openNail} type={ ServiceTypes.nail }/>
                    <ServiceButton open={openConusltation} type={ ServiceTypes.consultation } />
                </ul>
            </nav>
            <a  tabIndex={0}
                class="next-page-button main__anchor"
                href="#contacts"
            > <NextPageArrow/> </a>
            <Modal type={ServiceTypes.nail} children={children} ref={nailTherapy} />
            <Modal type={ServiceTypes.consultation} children={children}  ref={consultation} />
        </section>
    );
}

export default Services;