import type { FunctionComponent } from 'preact';
import LeftUpperFrame from '../../svg/LeftUpperFrame/LeftUpperFrame';
import RightUpperFrame from '../../svg/RightUpperFrame/RightUpperFrame';

import './parallax.scss';

interface Parallax { type: number }

const LeftFrame: FunctionComponent<Parallax> = ({ type }) => {
    const postfix = type === 1 ? ' parallax_upper' : ' parallax_lower';
    return <div class={'parallax__elem_left ' + postfix}>
        <LeftUpperFrame />
    </div>
}

const RightFrame: FunctionComponent<Parallax> = ({ type }) => {
    const postfix = type === 1 ? ' parallax_upper' : ' parallax_lower';
    return <div class={'parallax__elem_right ' + postfix}>
        <RightUpperFrame />
    </div>
}

export { RightFrame, LeftFrame };