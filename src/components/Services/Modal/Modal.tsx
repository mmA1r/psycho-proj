import { useRef } from 'preact/compat';
import { forwardRef, useImperativeHandle  } from 'preact/compat';
import { ServiceTypes } from '../ServiceButton/ServiceButton';
import './modal.scss';

type Props = { type: ServiceTypes, children: { nailThreapy: any, consultation: any } }

const Modal = forwardRef<HTMLDialogElement, Props>(({ type, children }, ref) => {
    const modal = useRef<HTMLDialogElement>(null);

    useImperativeHandle<HTMLDialogElement|null, HTMLDialogElement|null>(ref, () => modal.current);

    const onClickHandler = () => {
        const modalCurr = modal.current;

        document.body.classList.remove('scroll-lock');
        
        if (modalCurr) {
            modalCurr.classList.add('modal__closing');
            setTimeout(() => {
                if (modalCurr.close) { modalCurr.close(); }
                modalCurr.classList.remove('modal__closing');
                modalCurr.classList.remove('modal_opened');
            }, 700);
        }
    };
    
    const isNail = type === ServiceTypes.nail ? true : false;
    const id = isNail ? "nail-therapy": "consultation";
    const subclass = isNail ? "services__nail-therapy": "services__consultation";
    const buttonSide = isNail ? 'left' : 'right';
    const content = isNail ? children.nailThreapy : children.consultation;

    return (
        <dialog open={false} ref={modal} id={id} class={subclass + " services__modal"}>
            <button onClick={onClickHandler} class={"modal__close-button close-button_"+buttonSide}>
                <svg class="move-to-arrow_reused"><use xlinkHref="#move-to-arrow_shaded"></use></svg>
            </button>
            { content }
        </dialog>
    );
})

export default Modal;