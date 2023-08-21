import NextPageArrow from '../../svg/NextPageArrow/NextPageArrow';
import InformationBlock, { InformationTypes } from './InformationBlock/InformationBlock';
import './about.scss';

const About = () => {
    return (
        <section id="about" class="about">
            <div class="about__information-slider">
                <div class="about__information-slides">
                    <InformationBlock type={InformationTypes.bio}/>
                    <InformationBlock type={InformationTypes.education}/>
                </div>
            </div>
            <a  tabIndex={0}
                class="next-page-button main__anchor"
                href="#services"
            > <NextPageArrow/> </a>
        </section>
    );
}

export default About;