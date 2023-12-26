import {useState, useEffect, useRef, useDeferredValue} from 'react'

import { motion } from 'framer-motion'
import image1 from '../img/clone-iphone.png'
import image2 from '../img/gerador-qrdcode.png'
import image3 from '../img/hdc-proz.png'
import image4 from '../img/insta-clone.png'
import image5 from '../img/mario-jump.png'
import image6 from '../img/quiz-livros.png'
import image7 from '../img/cardapio-novo.png'

const images = [image1, image2, image3, image4, image5, image6, image7];

export default function Projetos() {

    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <div className='app' id='projetos'>
            <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                <motion.div 
                className='inner'
                drag="x"
                dragConstraints={{right: 0, left: -width}}
                initial={{x:100}}
                animate={{x: 0}}
                transition={{duration: 0.8}}
                >
                    {images.map(image => (
                        <motion.div className='item' key={image}>
                            <img src={image} alt="Foto dos projetos" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>


        </div>
)};


