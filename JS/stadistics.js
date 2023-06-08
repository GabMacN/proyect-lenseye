const vision = {
    "allEffects": [
        "effect-dr",
        "effect-amd",
        "effect-glaucoma"
    ],

    "types": [
        [
            "Visión Normal",
            "La visión normal es el estado óptimo de la vista, en el cual los ojos pueden enfocar adecuadamente los objetos tanto de cerca como de lejos. Las personas con visión normal pueden percibir los detalles con claridad y tienen una buena capacidad para distinguir colores. "
        ],

        [
            "Visión Borrosa",
            "La visión borrosa es una condición en la que los objetos se ven difuminados o poco claros. Puede ocurrir tanto en la visión de cerca como en la de lejos. La visión borrosa puede ser causada por diversos factores, como errores refractivos (miopía, hipermetropía o astigmatismo), condiciones oculares, lesiones o problemas de salud en general."
        ],

        [
            "Retinopatía Diabética",
            "La retinopatía diabética es una enfermedad ocular que afecta a las personas con diabetes. Se produce debido a daños en los vasos sanguíneos de la retina, la capa sensible a la luz en la parte posterior del ojo. Con el tiempo, esto puede llevar a una disminución de la visión e incluso a la ceguera si no se trata adecuadamente. El control cuidadoso del azúcar en la sangre y las revisiones oftalmológicas regulares son cruciales para detectar y tratar la retinopatía diabética a tiempo."
        ],

        [
            "Degeneración Macular por la Edad",
            "La degeneración macular por la edad (DMAE) es una enfermedad ocular común entre las personas de edad avanzada. Afecta la mácula, la parte central de la retina, lo que puede ocasionar una pérdida gradual de la visión central. La DMAE puede dificultar la lectura, el reconocimiento de rostros y la realización de actividades que requieren una visión clara. Existen dos formas principales de DMAE: seca y húmeda. La forma seca progresa lentamente, mientras que la forma húmeda puede ser más rápida y grave."
        ],

        [
            "Glaucoma",
            "El glaucoma es un grupo de enfermedades oculares que dañan el nervio óptico, responsable de transmitir las señales visuales al cerebro. Usualmente está asociado con un aumento de la presión intraocular. Si no se trata, el glaucoma puede llevar a la pérdida gradual de la visión periférica e incluso a la ceguera. El diagnóstico temprano y el control regular de la presión ocular son esenciales para prevenir el daño adicional y preservar la visión."
        ],

        [
            "Catarata",
            "Una catarata es una opacidad en el cristalino, la lente natural del ojo, que normalmente es transparente. La presencia de una catarata puede dificultar la visión al bloquear o distorsionar la luz que ingresa al ojo. Los síntomas incluyen visión borrosa, sensibilidad a la luz y dificultad para ver en la noche. La cirugía de cataratas es un procedimiento común y efectivo para extraer el cristalino opaco y reemplazarlo con un lente artificial."
        ]
    ]
};

const buttons = document.getElementsByClassName("banner-button");
const mainImg = document.getElementById("main-image");

const problemTitle = document.getElementById("problem-title");
const problemDescription = document.getElementById("problem-description");

const disableAll = function() {
    for (const button of buttons) {
        button.classList.remove("banner-button-selected")
    }

    vision.allEffects.forEach((id, index) => {
        document.getElementById(id).style.opacity = 0;
    });

    mainImg.classList.remove("image-blurred");
    mainImg.classList.remove("image-amd");
    mainImg.classList.remove("image-cataract");
}

const setType = function(id) {
    const info = vision.types[id];

    problemTitle.textContent = info[0];
    problemDescription.textContent = info[1];
}

const enableType = function(id) {
    disableAll();
    setType(id);

    switch (id) {
        case 1:
            mainImg.classList.add("image-blurred");
            break

        case 2:
            document.getElementById("effect-dr").style.opacity = 0.75;
            break

        case 3:
            document.getElementById("effect-amd").style.opacity = 1;
            mainImg.classList.add("image-amd");
            break

        case 4:
            document.getElementById("effect-glaucoma").style.opacity = 1;
            mainImg.classList.add("image-glaucoma");
            break

        case 5:
            mainImg.classList.add("image-cataract");
            break

    }
}


const enableButton = function(button) {
    console.log(button);

    enableType(parseInt(button.getAttribute("btype")));
    button.classList.add("banner-button-selected");
}

/* Load Buttons */
for (const button of buttons) {
    button.onclick = () => {enableButton(button)};
}

enableButton(buttons[0]);