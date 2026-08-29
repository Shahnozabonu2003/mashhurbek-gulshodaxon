const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");

let isOpening = false;

seal.addEventListener("click", () => {

    if (isOpening) return;

    isOpening = true;

    envelope.classList.add("open");
    const music = document.getElementById("weddingMusic");

music.currentTime = 58;

music.play().catch(() => {
    console.log("Music could not start yet.");
});

    setTimeout(() => {

        document.body.classList.add("website-open");

        document.body.style.overflow = "auto";

    }, 1700);

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   COUNTDOWN
===================================================== */

const weddingDate =
    new Date("October 11, 2026 11:00:00");


function updateCountdown() {

    const now = new Date();

    const difference =
        weddingDate.getTime() -
        now.getTime();


    if (difference <= 0) {

        document.getElementById("days").textContent = "000";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60))
            % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60))
            % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000)
            % 60
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(3, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);



/* =====================================================
   THREE SCRATCH DATE CARDS
===================================================== */

const scratchCards =
    document.querySelectorAll(".scratch-canvas");


scratchCards.forEach((canvas) => {

    const ctx =
        canvas.getContext("2d");

    let drawing = false;

    const width = canvas.width;
    const height = canvas.height;


    /* luxury gold cover */

    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            width,
            height
        );


    gradient.addColorStop(
        0,
        "#fff8e9"
    );

    gradient.addColorStop(
        .45,
        "#ead09e"
    );

    gradient.addColorStop(
        1,
        "#d5b16c"
    );


    ctx.fillStyle = gradient;

    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    /* diagonal satin lines */

    ctx.save();

    ctx.globalAlpha = .22;

    ctx.strokeStyle = "#ffffff";

    ctx.lineWidth = 13;


    for (
        let x = -height;
        x < width + height;
        x += 38
    ) {

        ctx.beginPath();

        ctx.moveTo(
            x,
            0
        );

        ctx.lineTo(
            x + height,
            height
        );

        ctx.stroke();

    }

    ctx.restore();


    /* soft center */

    const glow =
        ctx.createRadialGradient(
            width / 2,
            height / 2,
            5,
            width / 2,
            height / 2,
            width / 2
        );


    glow.addColorStop(
        0,
        "rgba(255,255,255,.35)"
    );

    glow.addColorStop(
        1,
        "rgba(255,255,255,0)"
    );


    ctx.fillStyle = glow;

    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    /* hint */

    ctx.fillStyle =
        "rgba(110,80,40,.42)";

    ctx.font =
        "14px Georgia";

    ctx.textAlign =
        "center";

    ctx.fillText(
        "SCRATCH",
        width / 2,
        height / 2 - 5
    );

    ctx.fillText(
        "HERE",
        width / 2,
        height / 2 + 17
    );


    function erase(e) {

        if (!drawing) return;

        const rect =
            canvas.getBoundingClientRect();


        const scaleX =
            width / rect.width;

        const scaleY =
            height / rect.height;


        const x =
            (e.clientX - rect.left)
            * scaleX;

        const y =
            (e.clientY - rect.top)
            * scaleY;


        ctx.globalCompositeOperation =
            "destination-out";


        ctx.beginPath();

        ctx.arc(
            x,
            y,
            27,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }


    canvas.addEventListener(
        "pointerdown",
        (e) => {

            drawing = true;

            canvas.setPointerCapture(
                e.pointerId
            );

            erase(e);

        }
    );


    canvas.addEventListener(
        "pointermove",
        erase
    );


    canvas.addEventListener(
        "pointerup",
        () => {

            drawing = false;

        }
    );


    canvas.addEventListener(
        "pointercancel",
        () => {

            drawing = false;

        }
    );

});


/* =====================================================
   DAYS UNTIL 10 OCTOBER 2026
===================================================== */

function updateDateCountdown() {

    const target =
        Date.UTC(
            2026,
            9,
            10
        );


    const today =
        new Date();


    const todayUTC =
        Date.UTC(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
        );


    const difference =
        target - todayUTC;


    const days =
        Math.max(
            0,
            Math.ceil(
                difference /
                (1000 * 60 * 60 * 24)
            )
        );


    const element =
        document.getElementById(
            "dateDays"
        );


    if (element) {

        element.textContent =
            String(days).padStart(
                3,
                "0"
            );

    }

}


updateDateCountdown();

setInterval(
    updateDateCountdown,
    60 * 60 * 1000
);

   

/* =====================================================
   LOCATION
===================================================== */

function openMap() {

    const query =
        encodeURIComponent(
            "Xo'jaobod Grand Hall To'yxonasi"
        );

    window.open(
        "https://www.google.com/maps/search/?api=1&query=" + query,
        "_blank"
    );

}
/* =========================================
   MUSIC MUTE / UNMUTE
========================================= */

const music =
    document.getElementById("weddingMusic");

const musicToggle =
    document.getElementById("musicToggle");


musicToggle.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicToggle.textContent = "🔊";

    } else {

        music.pause();

        musicToggle.textContent = "🔇";

    }

});

/* =====================================================
   TIMELINE FLOWER — SCROLL ANIMATION
===================================================== */

const timeline = document.querySelector(".timeline");
const flower = document.querySelector(".timeline-flower");

if (timeline && flower) {

    function moveTimelineFlower() {

        const rect = timeline.getBoundingClientRect();

        // Timeline ekranda qanchalik ko'rinayotganini hisoblaymiz
        const screenPoint = window.innerHeight * 0.45;

        let position = screenPoint - rect.top;

        // Gulchaning chegaradan chiqib ketmasligi
        const maxPosition =
            timeline.offsetHeight - flower.offsetHeight;

        position = Math.max(
            0,
            Math.min(position, maxPosition)
        );

        // Gulchani pastga siljitish
        flower.style.top = position + "px";
    }

    window.addEventListener(
        "scroll",
        moveTimelineFlower,
        { passive: true }
    );

    window.addEventListener(
        "resize",
        moveTimelineFlower
    );

    // Boshlang'ich holat
    moveTimelineFlower();
}
/* =========================================
   YANDEX MAP
========================================= */

function openMap() {
    window.open(
        "https://yandex.ru/navi?whatshere%5Bzoom%5D=18&whatshere%5Bpoint%5D=72.659570,40.617920&si=jvu8gd050wbdphxy6huxfz30eg",
        "_blank"
    );
}
