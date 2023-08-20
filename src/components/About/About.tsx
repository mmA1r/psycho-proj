import NextPageArrow from '../../svg/NextPageArrow/NextPageArrow';
import './about.scss';

const About = () => {
    return (
        <div id="about" class="about">
            <h3></h3>
            <div></div>
            <a  tabIndex={0}
                class="next-page-button main__anchor"
                href="#services"
            > <NextPageArrow/> </a>
        </div>
    );
}

export default About;