import { useEffect } from 'preact/hooks';
import { useObserver } from 'preact-intersection-observer';
import './lotus.scss';

const Lotus = () => {
    const [ref, inView, entry] = useObserver<SVGSVGElement>({ triggerOnce: true });

    useEffect(() => { if (inView) { entry.target.classList.add('lotus_animated'); } })

    return (
        <svg ref={ ref } id="lotus" viewBox="0 -10 140 100">
            <path class="lotus__lower-petal" d="M34.9 53C54 53 69.8 71.5 69.8 71.5S54 90 34.8 90C15.7 90 0 71.5 0 71.5S15.6 53 34.9 53Z"/>
            <path class="lotus__lower-petal" d="M34.9 53C54 53 69.8 71.5 69.8 71.5S54 90 34.8 90C15.7 90 0 71.5 0 71.5S15.6 53 34.9 53Z"/>
            <path class="lotus__middle-petal" d="M58.5 33.5C72.2 47.5 69.8 72 69.8 72s-23.6 2-37.4-12C18.6 46 20.6 21 20.6 21s24-1.5 37.9 12.5Z"/>
            <path class="lotus__lower-petal" d="M105.1 53C86 53 69.8 71.5 69.8 71.5S85.8 90 105 90c19.3 0 34.9-18.5 34.9-18.5S124.4 53 105.1 53Z"/>
            <path class="lotus__middle-petal" d="M82 33.5C68.3 47.5 69.8 72 69.8 72s24.5 2 38.3-12c13.8-14 11.8-39 11.8-39s-24-1.5-37.9 12.5Z"/>
            <path class="lotus__upper-petal" d="M87.4 36c0 19.6-17.6 35.5-17.6 35.5S52 55.5 52 36C52 16.4 70.7 0 70.7 0s16.7 16.4 16.7 36Z"/>
            <path class="lotus-dots" d="M93.3 11a2 2 0 0 1-2 2c-1 0-1.9-.9-1.9-2s.9-2 2-2c1 0 2 .9 2 2ZM128.7 48a2 2 0 0 1-2 2c-1 0-2-1-2-2 0-1.1 1-2 2-2 1.1 0 2 .9 2 2ZM15.7 48a2 2 0 0 1-2 2c-1 0-2-1-2-2 0-1.1 1-2 2-2 1.1 0 2 .9 2 2ZM50.1 11a2 2 0 0 1-2 2c-1 0-2-.9-2-2s1-2 2-2c1.1 0 2 .9 2 2Z"/>
        </svg>
    );
}

export default Lotus