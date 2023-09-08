import NextPageArrow from '../../svg/NextPageArrow/NextPageArrow';
import InformationBlock, { InformationTypes } from './InformationBlock/InformationBlock';

import './about.scss';

const About = () => {

    const image = <picture class={"about__image"}>
        <source 
            srcset="/images/bioBackground/about-phone.jpg"
            type={"image/jpg"}
            media={"(max-width: 725px)"}
        />
        <source 
            srcset="/images/bioBackground/about-desktop@1x.avif 1x,
                    /images/bioBackground/about-desktop@2x.avif 2x"
            type={"image/avif"}
        />
        <source 
            srcset="/images/bioBackground/about-desktop@1x.webp 1x,
                    /images/bioBackground/about-desktop@2x@2x.webp 2x"
            type={"image/webp"}
        />
        <img
            src="/images/bioBackground/about-desktop@1x.jpg"
            srcset="/images/bioBackground/about-desktop@2x.jpg 2x"
            alt={"Фон"}
        />
    </picture>;

    return (
        <section id="about" class="about">
            <div class={"about__image-wrapper"}>
                { image }
                <span/>
            </div>
            <div class="about__information-slider">
                <div class="about__information-slides">
                    <InformationBlock type={InformationTypes.bio}/>
                    <InformationBlock type={InformationTypes.education}/>
                </div>
            </div>
            <a  tabIndex={0}
                class="next-page-button about__anchor"
                href="#services"
                aria-label={"Страница услуги"}
            > <NextPageArrow/> </a>
        </section>
    );
}

export default About;