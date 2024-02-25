// let newPlusButton = document.getElementById('addButton');
// newPlusButton.onclick = newPlayer;
let answers = new Array();
let matches = new Array();
let questions = [ "Важно ли, чтобы автомобиль был новым? 1 - да, 2 - нет",
                "Какой пробег должен быть у авто? 1 - до 30к, 2 - до 70к, 3 - до 150к",
                "Какого возраста должен быть авто? 1 - не старше 3 лет, 2 - не старше 7, 3 - не старше 12",
                "Какой класс автомобиля предпочтителен? 1 - city-car, 2 - subcompact, 3 - compact, 4 - midsize, 5 - large, 6 - luxury",
                "Важно ли наличие кондиционера? 1 - да, 2 - нет",
                "Важно ли наличие мультимедиа? 1 - да, 2 - нет",
                "Важно ли, чтобы все стеклоподъемники были электрическими? 1 - да, 2 - нет",
                "Привод автомобиля? 1 - передний, 2 - задний, 3 - полный",
                "Какая коробка? 1 - механическая, 2 - автоматическая",
                "Интересуют ли вас дополнительные услуги? 1 - да, 2 - нет",
                "Хотите оформить полис КАСКО? 1 - да, 2 - нет",
                "Нужен ли комплект зимней резины? 1 - да, 2 - нет",
                "Собираетесь ли сдавать свой старый авто в трейд-ин? 1 - да, 2 - нет",
                "Нужен ли турбонаддув? 1 - да, 2 - нет",
                "Бензин или дизель? 1 - бензин, 2 - дизель",
                "Важна ли вам ликвидность авто? 1 - да, 2 - нет",
                "Нужен ли обогрев переднего стекла? 1 - да, 2 -нет",
                "С какой стороны должен быть руль? 1 - слева, 2 - справа?",
                "Рассматриваете ли вы отечественные авто? 1 - да, 2 - нет",
                "До какой стоимости вы рассматриваете автомобили?"
                ]
let catalog = {
        "Fiat 500": {
          "IsNew": 2,
          "milleage": 2,
          "old": 3,
          "class": 1,
          "condicioner": 1,
          "multimedia": 1,
          "esp": 1,
          "wd": 1,
          "transmission": 2,
          "shit": 2,
          "shit1": 2,
          "shit2": 2,
          "shit3": 2,
          "turbo": 2,
          "gas": 1,
          "liquids": 1,
          "windshieldheat": 2,
          "wheelside": 1,
          "sssr": 2,
          "cost": 900000,
        },
        "Daewoo Matiz": {
            "IsNew": 1,
            "milleage": 1,
            "old": 1,
            "class": 1,
            "condicioner": 2,
            "multimedia": 2,
            "esp": 2,
            "wd": 1,
            "transmission": 2,
            "shit": 1,
            "shit1": 1,
            "shit2": 1,
            "shit3": 1,
            "turbo": 2,
            "gas": 1,
            "liquids": 1,
            "windshieldheat": 2,
            "wheelside": 1,
            "sssr": 2,
            "cost": 500000,
        },
        "Toyota Corolla": {
            "IsNew": 2,
            "milleage": 2,
            "old": 3,
            "class": 3,
            "condicioner": 1,
            "multimedia": 1,
            "esp": 1,
            "wd": 1,
            "transmission": 2,
            "shit": 1,
            "shit1": 1,
            "shit2": 1,
            "shit3": 1,
            "turbo": 2,
            "gas": 1,
            "liquids": 1,
            "windshieldheat": 2,
            "wheelside": 1,
            "sssr": 2,
            "cost": 900000,
        },
        "Honda Civic": {
            "IsNew": 2,
            "milleage": 2,
            "old": 3,
            "class": 1,
            "condicioner": 1,
            "multimedia": 1,
            "esp": 2,
            "wd": 2,
            "transmission": 2,
            "shit": 1,
            "shit1": 1,
            "shit2": 1,
            "shit3": 1,
            "turbo": 2,
            "gas": 1,
            "liquids": 1,
            "windshieldheat": 2,
            "wheelside": 1,
            "sssr": 2,
            "cost": 900000,
        },
        "BMW 3 Series": {
            "IsNew": 1,
            "milleage": 2,
            "old": 3,
            "class": 1,
            "condicioner": 1,
            "multimedia": 1,
            "esp": 1,
            "wd": 2,
            "transmission": 2,
            "shit": 1,
            "shit1": 1,
            "shit2": 1,
            "shit3": 1,
            "turbo": 2,
            "gas": 1,
            "liquids": 1,
            "windshieldheat": 2,
            "wheelside": 1,
            "sssr": 2,
            "cost": 900000,
        },
        "Mercedes-Benz C-Class": {
            "IsNew": 2,
            "milleage": 2,
            "old": 3,
            "class": 1,
            "condicioner": 1,
            "multimedia": 1,
            "esp": 1,
            "wd": 1,
            "transmission": 2,
            "shit": 1,
            "shit1": 1,
            "shit2": 1,
            "shit3": 1,
            "turbo": 2,
            "gas": 1,
            "liquids": 1,
            "windshieldheat": 2,
            "wheelside": 2,
            "sssr": 2,
            "cost": 900000,
        },
        "Audi A4": {
            "IsNew": 1,
            "milleage": 2,
            "old": 3,
            "class": 1,
            "condicioner": 1,
            "multimedia": 1,
            "esp": 1,
            "wd": 1,
            "transmission": 2,
            "shit": 1,
            "shit1": 2,
            "shit2": 1,
            "shit3": 1,
            "turbo": 2,
            "gas": 1,
            "liquids": 1,
            "windshieldheat": 2,
            "wheelside": 1,
            "sssr": 2,
            "cost": 900000,
        },
        "Volkswagen Passat": {
            "IsNew": 1,
            "milleage": 2,
            "old": 3,
            "class": 1,
            "condicioner": 1,
            "multimedia": 1,
            "esp": 1,
            "wd": 1,
            "transmission": 2,
            "shit": 1,
            "shit": 1,
            "shit": 1,
            "shit": 1,
            "turbo": 2,
            "gas": 1,
            "liquids": 2,
            "windshieldheat": 2,
            "wheelside": 1,
            "sssr": 2,
            "cost": 900000,
        },
        "Ford Focus": {
            "IsNew": 1,
            "milleage": 2,
            "old": 3,
            "class": 1,
            "condicioner": 1,
            "multimedia": 1,
            "esp": 1,
            "wd": 1,
            "transmission": 2,
            "shit": 1,
            "shit": 1,
            "shit": 1,
            "shit": 1,
            "turbo": 2,
            "gas": 1,
            "liquids": 1,
            "windshieldheat": 2,
            "wheelside": 1,
            "sssr": 2,
            "cost": 900000,
        },
        "Chevrolet Cruze": {
            "IsNew": 1,
            "milleage": 2,
            "old": 3,
            "class": 1,
            "condicioner": 1,
            "multimedia": 1,
            "esp": 1,
            "wd": 1,
            "transmission": 2,
            "shit": 1,
            "shit": 1,
            "shit": 1,
            "shit": 1,
            "turbo": 2,
            "gas": 1,
            "liquids": 1,
            "windshieldheat": 2,
            "wheelside": 1,
            "sssr": 2,
            "cost": 900000,
        },
        "Hyundai Elantra": {
            "IsNew": 1,
            "milleage": 2,
            "old": 3,
            "class": 1,
            "condicioner": 1,
            "multimedia": 1,
            "esp": 1,
            "wd": 1,
            "transmission": 2,
            "shit": 1,
            "shit": 1,
            "shit": 1,
            "shit": 1,
            "turbo": 2,
            "gas": 1,
            "liquids": 1,
            "windshieldheat": 2,
            "wheelside": 1,
            "sssr": 2,
            "cost": 900000,
        }
    }

const elemText = document.querySelector('.inputText');
const question = document.querySelector('.question');
question.innerText  = questions[answers.length]

document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        nextQuestion()
    }
});

function ad(){
    alert("u gay");
}
    
// если нажмется кнопка Enter
function nextQuestion(){
    // получаем новое значение
    if (elemText.disabled || !elemText.value.length) {
        return;
    }
    answers.push(Number(elemText.value))
    checkerQuest()
    elemText.value = '';
    if (answers.length < 20){
        question.innerText  = questions[answers.length]
    } else {
        elemText.style.display = "none"
        matcher();
        if (matches != "")
            question.innerText  = "Вам подойдет автомобиль " + matches
        else
            question.innerText  = "Ничего не нашлось :("
    }
}

function matcher(){
    let i
    for (const [key, value] of Object.entries(catalog)) {
        console.log(key)
        i = 0;
        for (const [keyy, valuee] of Object.entries(value)){
            if (i == 19){
                if (valuee <= answers[i]){
                    i++
                    console.log("got it " + key)
                } else 
                    break
            } else {
                if (valuee == answers[i]){
                    i++
                    console.log("got it " + key)
                }else 
                    break
            }
            if (i == 20)
            matches.push(key)
        }
    }
    console.log("matches is", matches)
}

function checkerQuest(){
    if (answers.length == 1 && answers[answers.length - 1] == 1){
        answers.push(1)
        answers.push(1)
    }
    if (answers.length == 4 && (answers[answers.length - 1] == 4 || answers[answers.length - 1] == 5 || answers[answers.length - 1] == 6)){
        answers.push(1)
        answers.push(1)
        answers.push(1)
    }
    if (answers.length == 10 && answers[answers.length - 1] == 2){
        answers.push(2)
        answers.push(2)
        answers.push(2)
    }
    if (answers.length == 18 && answers[answers.length - 1] == 2){
        answers.push(2)
    }
}