const $sky = document.querySelector(".sky");

// 브라우저 창 크기에 따른 별 생성
window.onresize = () => {
    makeStars();
}

const makeStars = () => {
    // 브라우저 가장 큰 크기
    const maxSize = window.innerWidth;

    // 랜덤한 X 위치 값
    const getRandomX = () => Math.random() * maxSize;

    // 랜덤한 Y 위치 값
    const getRandomY = () => Math.random() * maxSize;

    // 랜덤한 크기 (circle는 반지름이 크기)
    const randomRadius = () => Math.random() * 0.7 + 0.6;

    // 임의의 값
    const _size = Math.floor(maxSize / 2);

    const htmlDummy = new Array(_size).fill().map((_, i) => {
        return `<circle class='star'
        cx=${getRandomX()}
        cy=${getRandomY()}
        r=${randomRadius()}
        className="star" />`
    }).join('');

    $sky.innerHTML = htmlDummy;
}

window.onload = () => {
 
    makeStars();
}

const nextPage = document.querySelector("#nextPage");
const prePage = document.querySelector("#prePage");
const slideContainer = document.querySelector("#slideContainer");
let index = 0;

nextPage.addEventListener("click", () => {
    index += 1;
    if (index > 4) {
        index = 0
    }
    slideContainer.style.transform = `translate3d(-${screen.width * index}px, 0, 0)`
})

prePage.addEventListener("click", () => {
    index -= 1;
    if (index < 0) {
        index = 4
    }
    slideContainer.style.transform = `translate3d(-${screen.width * index}px, 0, 0)`
})