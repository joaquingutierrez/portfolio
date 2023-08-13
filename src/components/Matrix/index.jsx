import React, { useEffect, useRef } from 'react';
import './style.css';

const Matrix = ({ lightMode }) => {


    let canvasWidth = useRef(0)
    let canvasHeight = useRef(0)

    useEffect(() => {
        const header = document.querySelector(".headerContainer").getBoundingClientRect()
        const separator = document.querySelectorAll(".separator")
        const separatorLeft = separator[0].getBoundingClientRect()
        const separatorRight = separator[1].getBoundingClientRect()

        canvasWidth.current = header.width
        canvasHeight.current = separatorLeft.top - header.height


        const mainCanvas = document.getElementById("canvasMatrix")
        const ctx = mainCanvas.getContext("2d")


        mainCanvas.style.left = `${header.left}px`
        mainCanvas.style.top = `${header.height}px`

        mainCanvas.width = canvasWidth.current;
        mainCanvas.height = canvasHeight.current;


        const fontSize = 16
        const columns = mainCanvas.width / fontSize

        //caracteres que van a aparecer
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        //creando el array
        const drops = []
        for (let i = 0; i < columns; i++) {
            drops[i] = mainCanvas.height//Establece todos los elementos en la posicion final
        }

        //funcion que va a dibujar
        const draw = () => {

            //estilo de las letras
            ctx.font = `${fontSize}px arial`;

            for (let i = 0; i < drops.length; i++) {


                let posicionVertical = drops[i] * fontSize
                let posicionHorizontal = i * fontSize

                if (!(posicionHorizontal + header.left < separatorRight.left && posicionHorizontal + header.left > separatorLeft.right)) {
                    ctx.fillStyle = '#fff'; // Color de la primera letra
                    const text = chars[Math.floor(Math.random() * chars.length)]; // Caracter aleatorio
                    ctx.fillText(text, posicionHorizontal, posicionVertical); //dibujando el caracter aleatorio en x, y
                    ctx.clearRect(posicionHorizontal, posicionVertical - 2 * fontSize, 1 * fontSize, 1 * fontSize); //Borra el elemento que esta largoDeLaCadena posiciones arriba de drops[i]

                    for (let j = 1; j < 4; j++) {
                        ctx.fillStyle = `rgba(0, 128, 0)`;
                        const text = chars[Math.floor(Math.random() * chars.length)];// Caracter aleatorio
                        ctx.fillText(text, posicionHorizontal, posicionVertical - j * fontSize); //dibujando el caracter aleatorio en i, j
                        ctx.clearRect(posicionHorizontal - 0.2, posicionVertical - (j + 2) * fontSize - 0.2, 1 * fontSize+0.2, 1 * fontSize+0.2); //Borra el elemento que esta ecima de la posicion j
                    }


                    drops[i]++ //Para que vayan cayendo



                    // Reiniciar la posición de la letra si ha llegado al fondo de la pantalla
                    if (posicionVertical > mainCanvas.height && Math.random() > 0.99) {
                        drops[i] = 0;
                    }

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
        <canvas id='canvasMatrix' className={`matrix-effect ${lightMode ? "matrix-effect-light" : "matrix-effect-dark"}`}></canvas>
    )
};

export default Matrix;
