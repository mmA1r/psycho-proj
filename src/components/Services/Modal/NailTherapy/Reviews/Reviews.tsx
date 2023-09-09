import { useRef } from 'preact/hooks';
import type { FunctionComponent } from 'preact';
import { nailTherapy } from '../../../../../data/data.json';

import './reviews.scss';

interface Review {  reviewer: string; review:string }

const Review: FunctionComponent<Review> = ({ reviewer, review }) => {
    return (
        <article class={"reviews__slide"}>
            <header><h4>{ reviewer }</h4></header>
            <p>{ review }</p>
        </article>
    );
}

const Reviews = () => {
    const slider = useRef<HTMLDivElement>(null);

    const onClickHandler = () => {
        const sliderRefs = slider.current;
        
        if (sliderRefs) {
            sliderRefs.classList.contains('slides_slided') ?
            sliderRefs.classList.remove('slides_slided') :
            sliderRefs.classList.add('slides_slided');
        }
    }

    const reviews = nailTherapy.reviews.map(review => <Review reviewer={review.title} review={review.text} />);

    return <section class={"nail-therapy__reviews"}>
        <h3 class={"introduction__title"}>{ nailTherapy.reviewsTitle }</h3>
        <div ref={slider} class={"reviews__slider"}>
            <div class={"reviews__slides"}>
                { reviews }
            </div>
            <button
                class={"reviews__button"}
                onClick={onClickHandler}
            >
                <svg><use xlinkHref="#move-to-arrow"></use></svg>
            </button>
        </div>
    </section>
}

export default Reviews;