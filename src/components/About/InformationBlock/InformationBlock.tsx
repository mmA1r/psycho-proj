import type { FunctionComponent } from 'preact';
import MoveToArrow from '../../../svg/MoveToArrow/MoveToArrow';
import { about, education } from '../../../data/data.json';
import './informationBlick.scss';

export enum InformationTypes {
    bio = 'Обо мне',
    education = 'Образование'
}

interface InformationBlock { 
    type: InformationTypes;
}

const InformationBlock: FunctionComponent<InformationBlock> = ({ type }) => {
    const isBio = type === InformationTypes.bio ? true : false;
    const paragraphs = isBio ? about.paragraphs : education.paragraphs;
    const index = isBio ? 0 : -1;

    const onClickHandler = () => {
        const slides = document.querySelectorAll<HTMLDivElement>('.about__information-block');
        const [bio, education] = document.querySelectorAll<HTMLButtonElement>('.about__change-slide');
        if (isBio) {
            slides.forEach(slide => slide.classList.add('slide_slided'));
            bio.tabIndex = -1; education.tabIndex = 0;
        } else {
            slides.forEach(slide => slide.classList.remove('slide_slided'));
            bio.tabIndex = 0; education.tabIndex = -1;
        }
    }
    
    const name = isBio ? 'bio' : 'education';
    const subTitle = isBio ? InformationTypes.education : InformationTypes.bio;
    const isReuse = isBio ? 
        <MoveToArrow isTrace={true} viewBox='0 0 40 30'/> :
        <svg class="move-to-arrow_reused"><use xlinkHref="#move-to-arrow_shaded"></use></svg>;
    const text = paragraphs.map((paragraph, index) => <p key={index} class={"about__paragraph " + `${ isBio ? 'paragraph_bio' : 'paragraph_ed' }`}>{ paragraph }</p>);
    const label = isBio ? 'Образование' : 'О себе';

    return (
        <article class="about__information-block">
            <h3 class={`about__sub-title ${ name }-sub-title`}>{ subTitle }</h3>
            <header class="about__header">
                <h2 class="about__title">{ type }</h2>
                <button
                    class={`about__change-slide ${ name }-button`}
                    onClick={onClickHandler}
                    tabIndex={index}
                    aria-label={label}
                > { isReuse } </button>
            </header>
            <div class="about__text-wrapper">
                { text }
            </div>
        </article>
    );
}

export default InformationBlock;