import type { FunctionComponent } from 'preact';
import './information.scss';

interface Information { type: string[]; }

const Information: FunctionComponent<Information> = ({ type }) => {
    return <div class={"introduction__information"}>
        <p>{type[0]}</p>
        <p>{type[1]}</p>
    </div>
}

export default Information;