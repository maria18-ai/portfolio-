
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '../img/criadorSenhas.PNG';
import image2 from '../img/dev-notes.PNG';
import image3 from '../img/formMult.PNG';
import image4 from '../img/hdc-proz.png';
import image5 from '../img/imcCalc.PNG';
import image6 from '../img/QrCode.PNG';
import image7 from '../img/quiz-livros.png';
import image8 from '../img/todo.PNG';

import './SliderProjetos.css'

function SliderProjetos() {

    const data = [
        {id: "1", image: image1, link: 'https://maria18-ai.github.io/criador-de-senhas/'},
        {id: "2", image: image2, link: 'https://maria18-ai.github.io/dev-notes/'},
        {id: "3", image: image3, link: 'https://maria18-ai.github.io/form/'},
        {id: "4", image: image4, link: 'https://maria18-ai.github.io/hDC_proz/'},
        {id: "5", image: image5, link: 'https://maria18-ai.github.io/calculadora-imc-react/'},
        {id: "6", image: image6, link: 'https://maria18-ai.github.io/gerador_QRCode/'},
        {id: "7", image: image7, link: 'https://maria18-ai.github.io/testeLivros/'},
        {id: "8", image: image8, link: 'https://maria18-ai.github.io/to-do.js/'},
    ];

    return (
        <div className='container' id='projetos'>
            <h2>PROJETOS</h2>
            <Swiper
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation
            id='slide'
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <a href={item.link}>
                            <img
                            src={item.image}
                            alt="Slider"
                            className='slide-item'
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SliderProjetos