import { name, maintitle } from '../../data/data.json';
import NextPageArrow from '../../svg/NextPageArrow/NextPageArrow';
import './main.scss';

const Main = () => {

    return (
        <section class="main">
            <div title={"Екатерина Матвеева"} class="main__image">
                <h1 class="main__title">{ name }</h1>
                <h1 class="main__title">{ maintitle[0] }</h1>
                <h1 class="main__title">{ maintitle[1] }</h1>
            </div>
            <a  tabIndex={0}
                class="next-page-button main__anchor"
                href="#about"
                aria-label={"Страница обо мне"}
            > <NextPageArrow/> </a>
        </section>
    );
}

export default Main;