import type { FunctionComponent } from 'preact';
import './picture.scss';

interface Picture { type: number }

const Picture: FunctionComponent<Picture> = ({ type }) => {

    const firstSource = (
        type === 1 ? 
            <source 
                srcset="/images/nailConsultaion/nail-consultation1@1x.avif 1x,
                        /images/nailConsultaion/nail-consultation1@2x.avif 2x, 
                        /images/nailConsultaion/nail-consultation1@3x.avif 3x"
                type={"image/avif"}
            /> :
        type === 2 ?
            <source 
                srcset="/images/nailConsultaion/nail-consultation2@1x.avif 1x,
                        /images/nailConsultaion/nail-consultation2@2x.avif 2x, 
                        /images/nailConsultaion/nail-consultation2@3x.avif 3x"
                type={"image/avif"}
            /> :
            <source 
                srcset="/images/nailConsultaion/nail-consultation3@1x.avif 1x,
                        /images/nailConsultaion/nail-consultation3@2x.avif 2x, 
                        /images/nailConsultaion/nail-consultation3@3x.avif 3x"
                type={"image/avif"}
            />
    );

    const secondSource = (
        type === 1 ? 
            <source 
                srcset="/images/nailConsultaion/nail-consultation1@1x.webp 1x,
                        /images/nailConsultaion/nail-consultation1@2x.webp 2x, 
                        /images/nailConsultaion/nail-consultation1@3x.webp 3x"
                type={"image/webp"}
            /> :
        type === 2 ?
            <source 
                srcset="/images/nailConsultaion/nail-consultation2@1x.webp 1x,
                        /images/nailConsultaion/nail-consultation2@2x.webp 2x, 
                        /images/nailConsultaion/nail-consultation2@3x.webp 3x"
                type={"image/webp"}
            /> :
            <source 
                srcset="/images/nailConsultaion/nail-consultation3@1x.webp 1x,
                        /images/nailConsultaion/nail-consultation3@2x.webp 2x, 
                        /images/nailConsultaion/nail-consultation3@3x.webp 3x"
                type={"image/webp"}
            />
    );

    const image = (
        type === 1 ? 
            <img
                class={""}
                src="/images/nailConsultaion/nail-consultation1@1x.jpg"
                srcset="
                    /images/nailConsultaion/nail-consultation1@2x.jpg 2x,
                    /images/nailConsultaion/nail-consultation1@3x.jpg 3x
                "
                alt={"Екатерина Матвеева"}
            />  :
        type === 2 ?
            <img 
                src="/images/nailConsultaion/nail-consultation2@1x.jpg"
                srcset="
                    /images/nailConsultaion/nail-consultation2@2x.jpg 2x,
                    /images/nailConsultaion/nail-consultation2@3x.jpg 3x
                "
                alt={"Упражнение на гвоздях"}
            />  :
            <img 
                src="/images/nailConsultaion/nail-consultation3@1x.jpg"
                srcset="
                    /images/nailConsultaion/nail-consultation3@2x.jpg 2x,
                    /images/nailConsultaion/nail-consultation3@3x.jpg 3x
                "
                alt={"Доска с гвоздями"}
            />
    );

    return <picture class={"introduction__image"}>
        { firstSource }
        { secondSource }
        { image }
    </picture>
}

export default Picture;