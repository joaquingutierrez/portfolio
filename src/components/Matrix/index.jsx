import React, { useEffect } from 'react';
import './style.css';

const Matrix = ({canvasWidth, canvasHeight}) => {

    useEffect(() => {
        const mainCanvas = document.getElementById("canvasMatrix")
        const ctx = mainCanvas.getContext("2d")

        mainCanvas.width = canvasWidth;
        mainCanvas.height = canvasHeight;


        
        const fontSize = 10
        const columns = mainCanvas.width / fontSize

        //caracteres que van a aparecer
        const chars = "01"

        //creando el array
        const drops = []
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * 10 - 20) //Establece todos los elementos en la posicion -20 a 0
        }

        //funcion que va a dibujar
        const draw = () => {

            //área de dibujo
            ctx.fillStyle = 'rgba(16, 20, 18, 0.1)';
            ctx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);

            //estilo de las letras
            ctx.fillStyle = '#0F0'; // Color de las letras (verde)
            ctx.font = `${fontSize}px arial`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)]; // Caracter aleatorio
                ctx.fillText(text, i * fontSize, drops[i] * fontSize); //dibujando el caracter aleatorio en x, y
                // Reiniciar la posición de la letra si ha llegado al fondo de la pantalla
                if (drops[i] * fontSize > mainCanvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++

            }
        }

        //Para que me funcione la animacion; setTimeout es para poder manejar la velocidad
        const animate = () => {
            setTimeout(()=>{
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
