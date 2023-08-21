import NextPageArrow from '../../svg/NextPageArrow/NextPageArrow';
import { servicesTitle } from '../../data/data.json';
import ServiceButton, { ServiceTypes } from './ServiceButton/ServiceButton';

import './services.scss';

const Services = () => {
    return (
        <section id="services" class="services">
            <h2 class="services__title">{ servicesTitle }</h2>
            <nav class="servicers__navigation">
                <ul class="servicers__navigation-list">
                    <ServiceButton type={ ServiceTypes.nail }/>
                    <ServiceButton type={ ServiceTypes.consultation } />
                </ul>
            </nav>
            <a  tabIndex={0}
                class="next-page-button main__anchor"
                href="#contacts"
            > <NextPageArrow/> </a>
        </section>
    );
}

export default Services;