```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


:root {

    --background: #050505;

    --card: rgba(255,255,255,0.055);

    --border: rgba(255,255,255,0.1);

    --text: #ffffff;

    --secondary: #999999;

    --instagram: #e1306c;

    --whatsapp: #25d366;

    --tiktok: #ffffff;

}


body {

    min-height: 100vh;

    font-family: "Poppins", sans-serif;

    background: var(--background);

    color: var(--text);

    display: flex;

    justify-content: center;

    align-items: center;

    padding: 30px 18px;

    overflow-x: hidden;

}


/* FONDO */

.background {

    position: fixed;

    inset: 0;

    overflow: hidden;

    z-index: -1;

    background:
        radial-gradient(
            circle at top,
            #1c1c1c 0%,
            #080808 45%,
            #030303 100%
        );

}


.orb {

    position: absolute;

    width: 300px;

    height: 300px;

    border-radius: 50%;

    filter: blur(90px);

    opacity: 0.18;

    animation:
        float 10s infinite alternate ease-in-out;

}


.orb1 {

    background: #7b2cff;

    top: -100px;

    left: -100px;

}


.orb2 {

    background: #e1306c;

    right: -100px;

    top: 35%;

    animation-delay: 2s;

}


.orb3 {

    background: #25d366;

    bottom: -150px;

    left: 30%;

    animation-delay: 4s;

}


@keyframes float {

    from {

        transform:
            translate(0,0)
            scale(1);

    }

    to {

        transform:
            translate(50px,-40px)
            scale(1.2);

    }

}


/* CONTENEDOR */

.container {

    width: 100%;

    max-width: 430px;

    text-align: center;

    animation:
        pageAppear
        0.8s
        ease;

}


@keyframes pageAppear {

    from {

        opacity: 0;

        transform:
            translateY(25px);

    }

    to {

        opacity: 1;

        transform:
            translateY(0);

    }

}


/* PERFIL */

.profile {

    position: relative;

    margin-bottom: 30px;

}


.avatar {

    width: 110px;

    height: 110px;

    margin: auto;

    border-radius: 50%;

    display: flex;

    justify-content: center;

    align-items: center;

    background:
        linear-gradient(
            145deg,
            #252525,
            #0d0d0d
        );

    border:
        2px solid
        rgba(255,255,255,0.15);

    box-shadow:

        0 0 0 8px
        rgba(255,255,255,0.025),

        0 0 45px
        rgba(255,255,255,0.08),

        inset 0 0 25px
        rgba(255,255,255,0.05);

    transition: 0.35s;

}


.avatar span {

    font-size: 32px;

    font-weight: 700;

    letter-spacing: 1px;

}


.avatar:hover {

    transform:
        scale(1.07)
        rotate(2deg);

}


.verified {

    position: absolute;

    width: 27px;

    height: 27px;

    border-radius: 50%;

    background: #3b82f6;

    border:
        3px solid
        #080808;

    display: flex;

    justify-content: center;

    align-items: center;

    color: white;

    font-size: 11px;

    top: 84px;

    left:
        calc(50% + 27px);

}


h1 {

    margin-top: 20px;

    font-size: 31px;

    font-weight: 700;

    letter-spacing: -1px;

}


.username {

    margin-top: 2px;

    color: #777;

    font-size: 13px;

}


.description {

    margin-top: 9px;

    color: var(--secondary);

    font-size: 14px;

}


/* LINKS */

.links {

    display: flex;

    flex-direction: column;

    gap: 14px;

}


.link {

    width: 100%;

    min-height: 72px;

    padding: 12px 18px;

    display: flex;

    align-items: center;

    text-decoration: none;

    color: white;

    border:
        1px solid
        var(--border);

    border-radius: 18px;

    background: var(--card);

    backdrop-filter: blur(18px);

    -webkit-backdrop-filter: blur(18px);

    transition:

        transform 0.25s ease,

        background 0.25s ease,

        border 0.25s ease,

        box-shadow 0.25s ease;

}


.link:hover {

    transform:
        translateY(-4px);

    background:
        rgba(255,255,255,0.085);

    border-color:
        rgba(255,255,255,0.17);

    box-shadow:
        0 15px 35px
        rgba(0,0,0,0.35);

}


.link:active {

    transform:
        scale(0.97);

}


.link-icon {

    width: 47px;

    height: 47px;

    border-radius: 14px;

    display: flex;

    justify-content: center;

    align-items: center;

    font-size: 22px;

    margin-right: 15px;

}


.instagram .link-icon {

    color: #ff4f91;

    background:
        rgba(225,48,108,0.13);

}


.whatsapp .link-icon {

    color: #25d366;

    background:
        rgba(37,211,102,0.13);

}


.tiktok .link-icon {

    color: white;

    background:
        rgba(255,255,255,0.10);

}


.phone .link-icon {

    color: #60a5fa;

    background:
        rgba(59,130,246,0.13);

}


.link-text {

    text-align: left;

    display: flex;

    flex-direction: column;

    gap: 2px;

}


.link-text strong {

    font-size: 15px;

}


.link-text small {

    font-size: 11px;

    color: #777;

}


.arrow {

    margin-left: auto;

    color: #666;

    font-size: 13px;

    transition: 0.25s;

}


.link:hover .arrow {

    color: white;

    transform:
        translateX(4px);

}


/* GALERÍA */

.gallery-section {

    margin-top: 30px;

}


.gallery-section h2 {

    font-size: 20px;

    font-weight: 600;

}


.gallery-section h2 i {

    margin-right: 5px;

}


.gallery-description {

    color: #777;

    font-size: 12px;

    margin-top: 4px;

    margin-bottom: 15px;

}


.gallery {

    display: grid;

    grid-template-columns:
        repeat(2,1fr);

    gap: 10px;

}


.gallery-item {

    height: 155px;

    border-radius: 16px;

    overflow: hidden;

    border:
        1px solid
        rgba(255,255,255,0.1);

    cursor: pointer;

    background: #111;

}


.gallery-item img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    display: block;

    transition: 0.35s;

}


.gallery-item:hover img {

    transform: scale(1.08);

}


/* MODAL IMAGEN */

.image-modal {

    position: fixed;

    inset: 0;

    background:
        rgba(0,0,0,0.88);

    backdrop-filter:
        blur(10px);

    display: none;

    justify-content: center;

    align-items: center;

    padding: 20px;

    z-index: 100;

}


.image-modal.show {

    display: flex;

}


.image-modal img {

    max-width: 95%;

    max-height: 85vh;

    border-radius: 18px;

    object-fit: contain;

    box-shadow:
        0 25px 80px
        rgba(0,0,0,0.7);

    animation:
        imageAppear
        0.3s
        ease;

}


@keyframes imageAppear {

    from {

        opacity: 0;

        transform:
            scale(0.85);

    }

    to {

        opacity: 1;

        transform:
            scale(1);

    }

}


.close-image {

    position: absolute;

    top: 20px;

    right: 20px;

    width: 42px;

    height: 42px;

    border: none;

    border-radius: 50%;

    background:
        rgba(255,255,255,0.12);

    color: white;

    font-size: 18px;

    cursor: pointer;

}


/* BOTONES */

.actions {

    display: grid;

    grid-template-columns:
        repeat(3,1fr);

    gap: 10px;

    margin-top: 15px;

}


.action-button {

    min-height: 52px;

    border-radius: 15px;

    border:
        1px solid
        var(--border);

    background:
        rgba(255,255,255,0.045);

    color: white;

    font-family: inherit;

    cursor: pointer;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    gap: 4px;

    transition: 0.25s;

}


.action-button i {

    font-size: 16px;

}


.action-button span {

    font-size: 10px;

    color: #999;

}


.action-button:hover {

    background:
        rgba(255,255,255,0.09);

    transform:
        translateY(-3px);

}


.action-button:active {

    transform:
        scale(0.95);

}


/* QR */

.qr-section {

    position: fixed;

    inset: 0;

    background:
        rgba(0,0,0,0.75);

    backdrop-filter:
        blur(10px);

    display: none;

    justify-content: center;

    align-items: center;

    padding: 20px;

    z-index: 20;

}


.qr-section.show {

    display: flex;

}


.qr-card {

    position: relative;

    width: 100%;

    max-width: 330px;

    padding: 30px;

    border-radius: 25px;

    background: #111;

    border:
        1px solid
        rgba(255,255,255,0.12);

    box-shadow:
        0 25px 80px
        rgba(0,0,0,0.6);

    animation:
        qrAppear
        0.3s
        ease;

}


@keyframes qrAppear {

    from {

        opacity: 0;

        transform:
            scale(0.85);

    }

    to {

        opacity: 1;

        transform:
            scale(1);

    }

}


.qr-card h2 {

    font-size: 20px;

}


.qr-card p {

    color: #777;

    font-size: 12px;

    margin:
        5px 0 20px;

}


#qrcode {

    width: 220px;

    height: 220px;

    padding: 10px;

    background: white;

    margin: auto;

    border-radius: 15px;

    display: flex;

    justify-content: center;

    align-items: center;

}


#qrcode img {

    max-width: 100%;

}


.qr-card small {

    display: block;

    color: #666;

    font-size: 10px;

    margin-top: 18px;

}


.close-qr {

    position: absolute;

    top: 15px;

    right: 15px;

    width: 32px;

    height: 32px;

    border-radius: 50%;

    border: none;

    background:
        rgba(255,255,255,0.08);

    color: white;

    cursor: pointer;

}


/* TOAST */

.toast {

    position: fixed;

    bottom: 25px;

    left: 50%;

    transform:
        translate(-50%,100px);

    background: #171717;

    border:
        1px solid
        rgba(255,255,255,0.12);

    padding:
        12px 18px;

    border-radius: 13px;

    display: flex;

    align-items: center;

    gap: 8px;

    font-size: 13px;

    box-shadow:
        0 10px 30px
        rgba(0,0,0,0.5);

    opacity: 0;

    transition: 0.35s;

    z-index: 150;

}


.toast.show {

    opacity: 1;

    transform:
        translate(-50%,0);

}


.toast i {

    color: #25d366;

}


/* FOOTER */

footer {

    margin-top: 35px;

    color: #444;

    font-size: 10px;

    line-height: 1.8;

}


footer strong {

    color: #777;

}


/* CELULARES */

@media (max-width:380px) {

    body {

        padding:
            20px 14px;

    }


    h1 {

        font-size: 27px;

    }


    .avatar {

        width: 95px;

        height: 95px;

    }


    .verified {

        top: 70px;

    }


    .link {

        min-height: 65px;

    }


    .gallery-item {

        height: 135px;

    }

}
```
