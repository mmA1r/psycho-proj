import Picture from './Picture/Picture';
import Information from './Information/Information';
import { nailTherapy } from '../../../../../data/data.json';
import './introduction.scss';

const Introduction = () => {
    return <section class={"nail-therapy__introduction"}>
            <h3 class={"introduction__title"}>
                { nailTherapy.typesTitle[0] }
                <p>{ nailTherapy.typesTitle[1] }</p>
            </h3>
            <div class={"introduction__content"}>
                <Picture type={1}/>
                <Information type={[nailTherapy.types[0], nailTherapy.types[1]]}/>
                <Picture type={2}/>
                <Information type={[nailTherapy.types[2], nailTherapy.types[3]]}/>
                <Picture type={3}/>
                <Information type={[nailTherapy.types[4], nailTherapy.types[5]]}/>
            </div>
        </section>
}

export default Introduction;