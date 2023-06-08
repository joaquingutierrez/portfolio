import React, { useEffect, useRef } from 'react';
import './style.css';

const Matrix = () => {


    let canvasWidth = useRef(0)
    let canvasHeight = useRef(0)

    useEffect(() => {
        const body = document.body

        canvasWidth.current = body.clientWidth
        canvasHeight.current = body.clientHeight


        const mainCanvas = document.getElementById("canvasMatrix")
        const ctx = mainCanvas.getContext("2d")

        mainCanvas.width = canvasWidth.current;
        mainCanvas.height = canvasHeight.current;


        const fontSize = 10
        const columns = mainCanvas.width / fontSize

        //caracteres que van a aparecer
        const chars = "01"

        //creando el array
        const drops = []
        for (let i = 0; i < columns; i++) {
            drops[i] = mainCanvas.height//Establece todos los elementos en la posicion final
        }

        //funcion que va a dibujar
        const draw = () => {

            //área de dibujo
            /*             ctx.fillStyle = 'rgba(16, 20, 18, 1)';
                        ctx.fillRect(0, 0, mainCanvas.width, mainCanvas.height); */

            //estilo de las letras
            ctx.fillStyle = '#0F0'; // Color de las letras (verde)
            ctx.font = `${fontSize}px arial`;
            
            for (let i = 0; i < drops.length; i++) {
                let posicionVertical = drops[i] * fontSize
                console.log(posicionVertical)
                let posicionHorizontal = i * fontSize
                const text = chars[Math.floor(Math.random() * chars.length)]; // Caracter aleatorio
                ctx.fillText(text, posicionHorizontal, posicionVertical); //dibujando el caracter aleatorio en x, y
                
                drops[i]++ //Para que vayan cayendo

                ctx.clearRect(posicionHorizontal, posicionVertical - 10 * fontSize, 1 * fontSize, 1 * fontSize); //Borra el elemento que esta 10 posiciones arriba de drops[i]
                

                // Reiniciar la posición de la letra si ha llegado al fondo de la pantalla
                if (drops[i] * fontSize > mainCanvas.height && Math.random() > 0.999) {
                    drops[i] = 0;
                }

            }
        }

        //Para que me funcione la animacion; setTimeout es para poder manejar la velocidad
        const animate = () => {
            setTimeout(() => {
                requestAnimationFrame(animate);
                draw();
            }, 100)
        };

        animate();
    }, [canvasWidth, canvasHeight])


    return (
        <canvas id='canvasMatrix' className='matrix-effect'></canvas>
    )
};

export default Matrix;
