const $dish = document.querySelector('#dish');
        let food;
        let date;

        function getDish(){
            const date = document.getElementById('test').value;
            console.log(date);

            let pDate = subStrCustom(date,'-');
            console.log(pDate);

            url = "https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=M10&SD_SCHUL_CODE=8000141&MLSV_YMD=" + pDate;

            const config = {
                method: "get"
            };

            fetch(url,config) 
            .then((response) => response.text())
            .then((str) => new DOMParser().parseFromString(str, 'application/xml'))
            .then((xml) => {
                error = xml.querySelector('CODE').innerHTML;
                if(error == "INFO-200"){
                    $dish.innerHTML = "그 날에 해당하는 급식 정보가 존재하지 않습니다.";
                }
                else {
                    food = xml.querySelector('DDISH_NM').innerHTML;
                    console.log(xml);
                    console.log(food);
                    let pFood = subStrCustom(food,']]>');
                    console.log(pFood);
                    $dish.innerHTML = pFood;
                }
            });
        } 

        function subStrCustom(text,target){
            return text.replaceAll(target,"");
        }

const video = document.querySelector("video");
const button = document.querySelector(".play");

button.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        button.querySelector("img").src = "images/정지.png";
    } else {
        video.pause();
        button.querySelector("img").src = "images/플레이.png";
    }
}); 