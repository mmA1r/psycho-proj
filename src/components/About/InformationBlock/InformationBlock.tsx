import type { FunctionComponent } from 'preact';
import './about.scss';

export enum InformationTypes {
    bio = 'Обо мне',
    education = 'Образование'
}

interface InformationBlock { type: InformationTypes }

const InformationBlock: FunctionComponent<InformationBlock> = ({ type }) => {
    return (
        <article class="about__information-block">
            <header>
                <h2>{ type }</h2>
                <button></button>
            </header>
        </article>
    );
}

export default InformationBlock;