import { links } from '../../../../data/data.json';
import type { FunctionComponent } from 'preact';
import './appointment.scss';

interface Appointment {
    info: string[];
    type: number;
}

const Appointment: FunctionComponent<Appointment> = ({ info, type }) => {
    const classAdd = type === 1 ? "link__consultation" : "link__nail";
    return <section class={"appointment"}>
        <h3 class={"introduction__title"}>{ info[0] }</h3>
        <p>{ info[1] }</p>
        <a class={"appointment__link " + classAdd} href={links.therapy.telegram}>
            <p>{ info[2] }</p>
            <p>{ info[3] }</p>
            <div>
                { info[4] }
                <svg><use xlinkHref="#move-to-arrow"></use></svg>
            </div>
        </a>
    </section>
}

export default Appointment;