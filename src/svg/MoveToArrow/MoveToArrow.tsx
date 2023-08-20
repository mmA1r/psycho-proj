import type { FunctionComponent } from "preact";
import './moveToArrow.scss';

interface MoveToArrow { isTrace: boolean, viewBox: string };

const MoveToArrow: FunctionComponent<MoveToArrow> = ({ isTrace, viewBox }) => {

    const shade = isTrace ? <path fill="url(#shadow-trace)" d="M11 24H0l1-10L0 4h11l5 1 11 9-11 9-5 1Z"/> : '';
    const def = isTrace ? 
        <defs>
            <linearGradient id="shadow-trace" x1="23.5" x2="1" y1="14" y2="14" gradientUnits="userSpaceOnUse">
                <stop/>
                <stop offset="1" stopOpacity="0"/>
            </linearGradient>
        </defs> : '';
    const ids = isTrace ? 'move-to-arrow_shaded' : 'move-to-arrow';
    
    return (
        <svg viewBox={viewBox} id={ids}>
            <path className="move-to-arrow__common-elems" d="M20 27c7-3 15-13 15-13S27 4 20 1c-8-2 5 0 5 0l14 13-14 13s-13 2-5 0Z"/>
            <path className="move-to-arrow__common-elems" d="M13 23c5-2 11-9 11-9s-6-7-11-9c-6-2 3 0 3 0l11 9-11 9s-9 2-3 0Z"/>
            { shade }
            { def }
        </svg>
    );
}

export default MoveToArrow;