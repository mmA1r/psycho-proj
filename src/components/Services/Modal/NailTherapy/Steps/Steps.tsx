import { useEffect } from 'preact/hooks';
import { useObserver } from 'preact-intersection-observer';
import type { FunctionComponent } from 'preact';
import { nailTherapy } from '../../../../../data/data.json';
import './steps.scss';

interface Step {
    time: string;
    title: string;
    index: number
}

const Step: FunctionComponent<Step> = ({ time, title, index }) => {
    const [ref, inView, entry] = useObserver<HTMLDivElement>({ triggerOnce: true });

    useEffect(() => {
        if ( inView ) { entry.target.classList.add('step_appear') }
    })

    const [ minutes ] = time.split(/\D/);

    return <div ref={ref} class={"nail-therapy__step"}>
        <time dateTime={`00:${minutes}`}>{ time }</time>
        <div class={"step__content"}>
            <p>{ title }</p>
            <div>{ index+1 }</div>
            <span/>
        </div>
    </div>
}

const Steps = () => {
    const steps = nailTherapy.practice.map((item, index) => <Step time={item.time} title={item.title} index={index}/>);
    return <section class={"nail-therapy__steps"}>
        <h3 class={"introduction__title"}>{ nailTherapy.practiceTitle }</h3>
        { steps }
    </section>
}

export default Steps;