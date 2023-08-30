import { useRef } from 'preact/compat';
import { forwardRef, useImperativeHandle  } from 'preact/compat';
import { ServiceTypes } from '../ServiceButton/ServiceButton';
import './modal.scss';

type Props = { type: ServiceTypes, children: { nailThreapy: any, consultation: any } }

const Modal = forwardRef<HTMLDialogElement, Props>(({ type, children }, ref) => {
    const modal = useRef<HTMLDialogElement>(null);

    useImperativeHandle<HTMLDialogElement|null, HTMLDialogElement|null>(ref, () => modal.current);

    const onClickHandler = () => {
        document.body.classList.remove('scroll-lock');
        modal.current?.classList.add('modal__closing');
        setTimeout(() => {
            modal.current?.close();
            modal.current?.classList.remove('modal__closing');
        }, 700);
    };
    
    const isNail = type === ServiceTypes.nail ? true : false;
    const id = isNail ? "nail-therapy": "consultation";
    const subclass = isNail ? "services__nail-therapy": "services__consultation";
    const buttonSide = isNail ? 'left' : 'right';
    const content = isNail ? children.nailThreapy : children.consultation;

    return (
        <dialog ref={modal} id={id} class={subclass + " services__modal"}>
            <button onClick={onClickHandler} class={"modal__close-button close-button_"+buttonSide}>
                <svg class="move-to-arrow_reused"><use xlinkHref="#move-to-arrow_shaded"></use></svg>
            </button>
            { content }
        </dialog>
    );
})

export default Modal;