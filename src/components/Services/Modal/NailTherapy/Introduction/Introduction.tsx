import { useRef } from 'preact/hooks';
import type { FunctionComponent } from 'preact';
import Picture from './Picture/Picture';
import Information from './Information/Information';
import { nailTherapy } from '../../../../../data/data.json';
import './introduction.scss';

interface Card {  type: number }

const Card: FunctionComponent<Card> = ({ type }) => {
    const card = useRef<HTMLDivElement>(null);

    const rotatePhotos = (e: MouseEvent) => {
        const cardRef = card.current;
        if (cardRef) {
            const xRotate = (e.offsetX - cardRef.getBoundingClientRect().width / 2) * .02;
            const yRotate = (e.offsetY - cardRef.getBoundingClientRect().height / 2) * .03;
            cardRef.style.transform = `rotateX(${yRotate}deg) rotateY(${xRotate}deg)`;
        }
    }

    const onMouseLeave = () => {
        const cardRef = card.current;
        if (cardRef) { cardRef.style.transform = `rotateX(0deg) rotateY(0deg)`; }
    }

    const types = (
        type === 1 ? [nailTherapy.types[0], nailTherapy.types[1]] :
        type === 2 ? [nailTherapy.types[2], nailTherapy.types[3]] :
        [nailTherapy.types[4], nailTherapy.types[5]]
    );

    return (
        <div 
            ref={card}
            onMouseLeave={onMouseLeave} 
            onMouseMove={rotatePhotos}
        >
            <Picture type={type}/>
            <Information type={types}/>
        </div>
    );
}

const Introduction = () => {

    return <section class={"nail-therapy__introduction"}>
            <h3 class={"introduction__title"}>
                { nailTherapy.typesTitle[0] }
                <p>{ nailTherapy.typesTitle[1] }</p>
            </h3>
            <div class={"introduction__content"}>
                <Card type={1}/>
                <Card type={2}/>
                <Card type={3}/>
            </div>
        </section>
}

export default Introduction;