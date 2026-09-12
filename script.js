```javascript
/* =========================
   AÑO
========================= */

const year = document.getElementById("year");

year.textContent =
    new Date().getFullYear();



/* =========================
   COMPARTIR
========================= */

const shareButton =
    document.getElementById("shareButton");


shareButton.addEventListener(
    "click",
    async () => {

        const shareData = {

            title:
                "Danny Burguete",

            text:
                "Mira mi página de contacto",

            url:
                window.location.href

        };


        try {

            if (navigator.share) {

                await navigator.share(
                    shareData
                );

            } else {

                await copyLink();

                showToast(
                    "Enlace copiado"
                );

            }

        }

        catch (error) {

            console.log(
                "Compartir cancelado"
            );

        }

    }
);



/* =========================
   COPIAR ENLACE
========================= */

const copyButton =
    document.getElementById("copyButton");


const copyText =
    document.getElementById("copyText");


copyButton.addEventListener(
    "click",
    async () => {

        await copyLink();

    }
);


async function copyLink() {

    try {

        await navigator.clipboard.writeText(
            window.location.href
        );


        copyText.textContent =
            "¡Copiado!";


        showToast(
            "Enlace copiado"
        );


        setTimeout(() => {

            copyText.textContent =
                "Copiar enlace";

        }, 2000);


    }

    catch (error) {

        showToast(
            "No se pudo copiar"
        );

    }

}



/* =========================
   CÓDIGO QR
========================= */

const qrButton =
    document.getElementById("qrButton");


const qrSection =
    document.getElementById("qrSection");


const closeQR =
    document.getElementById("closeQR");


const qrContainer =
    document.getElementById("qrcode");


let qrCreated = false;


qrButton.addEventListener(
    "click",
    () => {

        qrSection.classList.add(
            "show"
        );


        if (!qrCreated) {

            new QRCode(
                qrContainer,
                {

                    text:
                        window.location.href,

                    width:
                        200,

                    height:
                        200,

                    colorDark:
                        "#000000",

                    colorLight:
                        "#ffffff",

                    correctLevel:
                        QRCode.CorrectLevel.H

                }
            );


            qrCreated = true;

        }

    }
);


closeQR.addEventListener(
    "click",
    () => {

        qrSection.classList.remove(
            "show"
        );

    }
);


qrSection.addEventListener(
    "click",
    (event) => {

        if (
            event.target === qrSection
        ) {

            qrSection.classList.remove(
                "show"
            );

        }

    }
);



/* =========================
   GALERÍA
========================= */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


const imageModal =
    document.getElementById(
        "imageModal"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const closeImage =
    document.getElementById(
        "closeImage"
    );


galleryItems.forEach(
    (item) => {

        item.addEventListener(
            "click",
            () => {

                const image =
                    item.dataset.image;


                modalImage.src =
                    image;


                imageModal.classList.add(
                    "show"
                );

            }
        );

    }
);



/* CERRAR GALERÍA */

closeImage.addEventListener(
    "click",
    () => {

        imageModal.classList.remove(
            "show"
        );

        modalImage.src = "";

    }
);


imageModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === imageModal
        ) {

            imageModal.classList.remove(
                "show"
            );

            modalImage.src = "";

        }

    }
);



/* ESC PARA CERRAR */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            imageModal.classList.remove(
                "show"
            );

            qrSection.classList.remove(
                "show"
            );

            modalImage.src = "";

        }

    }
);



/* =========================
   TOAST
========================= */

const toast =
    document.getElementById(
        "toast"
    );


const toastText =
    document.getElementById(
        "toastText"
    );


let toastTimer;


function showToast(message) {

    toastText.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}



/* =========================
   ANIMACIÓN DE LINKS
========================= */

const links =
    document.querySelectorAll(
        ".link"
    );


links.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                link.style.transform =
                    "scale(0.97)";


                setTimeout(
                    () => {

                        link.style.transform =
                            "";

                    },
                    150
                );

            }
        );

    }
);
```
