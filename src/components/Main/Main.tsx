import { name, maintitle } from '../../data/data.json';
import NextPageArrow from '../../svg/NextPageArrow/NextPageArrow';
import './main.scss';

const Main = () => {

    const image = <picture class={"main__image"}>
        <source 
            srcset="/images/mainPhoto/main-background-phone@1x.avif 1x,
                    /images/mainPhoto/main-background-phone@2x_desktop@1x.avif 2x"
            type={"image/avif"}
            media={"(max-width: 725px)"}
        />
        <source 
            srcset="/images/mainPhoto/main-background-phone@1x.webp 1x,
                    /images/mainPhoto/main-background-phone@2x_desktop@1x.webp 2x"
            type={"image/webp"}
            media={"(max-width: 725px)"}
        />
        <source 
            srcset="/images/mainPhoto/main-background-phone@1x.jpg 1x,
                    /images/mainPhoto/main-background-phone@2x_desktop@1x.jpg 2x"
            type={"image/jpg"}
            media={"(max-width: 725px)"}
        />
        <source 
            srcset="/images/mainPhoto/main-background-phone@2x_desktop@1x.avif 1x,
                    /images/mainPhoto/main-background-desktop@2x.avif 2x"
            type={"image/avif"}
        />
        <source 
            srcset="/images/mainPhoto/main-background-phone@2x_desktop@1x.webp 1x,
                    /images/mainPhoto/main-background-desktop@2x.webp 2x"
            type={"image/webp"}
        />
        <img
            src="/images/mainPhoto/main-background-phone@2x_desktop@1x.jpg"
            srcset="/images/mainPhoto/main-background-desktop@2x.jpg 2x"
            alt={"Екатерина Матвеева"}
        />
    </picture>

    return (
        <section class="main">
            <div class="main__image-wrapper">
                { image }
                <span/>
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