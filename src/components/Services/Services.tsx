import { useRef } from 'preact/hooks';
import ServiceButton, { ServiceTypes } from './ServiceButton/ServiceButton';
import NextPageArrow from '../../svg/NextPageArrow/NextPageArrow';
import { servicesTitle } from '../../data/data.json';
import Modal from './Modal/Modal';
import './services.scss';

const Services = (children: any) => {
    const nailTherapy = useRef<HTMLDialogElement>(null);
    const consultation = useRef<HTMLDialogElement>(null);

    const openNail = () => {
        const nail = nailTherapy.current;

        if (nail) {
            nail.classList.add('modal_opened');
            
            if (nail.showModal) { nail.showModal(); }
        }
    }

    const openConusltation = () =>{
        const consult = consultation.current;

        if (consult) {
            consult.classList.add('modal_opened');

            if (consult.showModal) { consult.showModal(); } 
        }
    }

    const image = <picture class={"services__image"}>
        <source 
            srcset="/images/backgroundServeices/background-services_phone@1x.avif 1x,
                    /images/backgroundServeices/background-services_phone@2x_desktop@1x.avif 2x"
            type={"image/avif"}
            media={"(max-width: 725px)"}
        />
        <source 
            srcset="/images/backgroundServeices/background-services_phone@1x.webp 1x,
                    /images/backgroundServeices/background-services_phone@2x_desktop@1x.webp 2x"
            type={"image/webp"}
            media={"(max-width: 725px)"}
        />
        <source 
            srcset="/images/backgroundServeices/background-services_phone@1x.jpg 1x,
                    /images/backgroundServeices/background-services_phone@2x_desktop@1x.jpg 2x"
            type={"image/jpg"}
            media={"(max-width: 725px)"}
        />
        <source 
            srcset="/images/backgroundServeices/background-services_phone@2x_desktop@1x.avif 1x,
                    /images/backgroundServeices/background-services_desktop@2x.avif 2x"
            type={"image/avif"}
        />
        <source 
            srcset="/images/backgroundServeices/background-services_phone@2x_desktop@1x.webp 1x,
                    /images/backgroundServeices/background-services_desktop@2x.webp 2x"
            type={"image/webp"}
        />
        <img
            src="/images/backgroundServeices/background-services_phone@2x_desktop@1x.jpg"
            srcset="/images/backgroundServeices/background-services_desktop@2x.jpg 2x"
            alt={"Фон услуги"}
        />
    </picture>

    return (
        <section id="services" class="services">
            { image }
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