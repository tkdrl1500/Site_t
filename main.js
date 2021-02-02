const container = document.querySelector('.container');

let posX = 0;
// let maxX = -(container.clientWidth - window.innerWidth); 
let maxX = window.innerWidth - container.clientWidth; 

//값이 -로 가니까 전체에 -, 전체컨테이너 width - 현재창사이즈width
console.log(window.innerWidth);
console.log(container.clientWidth);


function handleControlor() {
    window.addEventListener('wheel', function (e) {
        // console.log(posX); // 0 - y좌표가 움직임 값 = -y좌표
        // console.log(maxX); //한페이지의 width 크기=1, 1 - 10 = -9 의값. 9개 페이지 width의 음수값
        // console.log(e.deltaY); //내릴 때 양수, 올릴때는 음수
        posX -= e.deltaY; //포지션X에 델타Y의 값이 빼지게 해본다. 
        if (posX > 0) posX = 0; 
        //좌측 페이지가 0 보다 작은면 posX값을 0으로 주어 더이상 그이상은 페이지가 안넘어간다.
        if (posX < maxX) posX = maxX;
        //
        container.style.transform = `translateX(${posX}px)` //container를 transform속성을 통해 posX의 값 만큼 X값을 변화 시켜서 이동효과를 주었다.
        console.log(container.style.transform);
    });
} 


function init() {
    handleControlor();
}

init();