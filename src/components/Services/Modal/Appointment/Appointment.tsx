import type { FunctionComponent } from 'preact';
import './appointment.scss';

interface Appointment {
    info: string[];
}

const Appointment: FunctionComponent<Appointment> = ({ info }) => {
    return <section class={"appointment"}>
        <h3 class={"introduction__title"}>{ info[0] }</h3>
        <p>{ info[1] }</p>
        <a class={"appointment__link"} href={"https://t.me/ekaterina8matveeva"}>
            <p>{ info[2] }</p>
            <p>{ info[3] }</p>
            <div>
                { info[4] }
                <svg><use xlinkHref="#telegram-icon"></use></svg>
            </div>
        </a>
    </section>
}

export default Appointment;