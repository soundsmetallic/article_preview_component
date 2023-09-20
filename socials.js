const btn =  document.querySelector(".sharing-option");
const mobileBtn = document.querySelector("#mobile-share-btn")
const socials = document.querySelector(".socials-option")
const mobileSocials = document.querySelector(".mobile-socials-option")

btn.addEventListener('click', () => {
    let w = window.innerWidth;
    console.log(w);
    window.addEventListener('resize', () => {
        w = window.innerWidth;
        if(w <= 910) {
            socials.style.display = 'none';
            mobileSocials.style.display = 'unset';
        } else if (w > 910) {
            socials.style.display = 'unset';
            mobileSocials.style.display = 'none'
        }
    });

    if(socials.style.display == '' && w > 910) {
        socials.style.display = 'unset';
    } else if (socials.style.display == 'none' && w > 910) {
        socials.style.display = 'unset';
    } else {
        socials.style.display = 'none';
    }

    if(w <= 910) {
        mobileSocials.style.display = 'unset';
        window.addEventListener('resize', () => {
            w = window.innerWidth;
            if(w > 910) {
                mobileSocials.style.display = 'none';
                socials.style.display = 'unset'
            }
        })
    }
});

mobileSocials.addEventListener('click', () => {
    mobileSocials.style.display = 'none';
});