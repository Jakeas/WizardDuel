function duel(){
 
    let heroesArr =[
        { fullName: "Harry Potter", attackPow: 6 },
        { fullName: "Ron Weasley", attackPow: 4 },
        { fullName: "Hermonine Granger", attackPow: 5 },
        { fullName: "Ginny Weasley", attackPow: 4 },
        { fullName: "Albus Dumbledore", attackPow: 8 },
    ]
    let villainsArr = [
        { fullName: "Draco Malfoy", attackPow: 4 },
        { fullName: "Lucius Malfoy", attackPow: 5 },
        { fullName: "Bellatrix LaStrange", attackPow: 6 },
        { fullName: "Lord Voldemort", attackPow: 8 },
        { fullName: "A Dementor", attackPow: 10 }
    ];
    let duelLocations = [
        "Forbidden Forest",
        "Whomping Willow",
        "Great Hall",
        "Hogwarts Express",
        "Room of Requirement"
    ];
    let spells = [
        "Wingardium Leviosa",
        "Expelliarmus",
        "Avada Kedavra",
        "Sectumsempra",
        "Expecto patronum",
    ]

    const hero = heroesArr[Math.floor(Math.random() * heroesArr.length)]
    const villain = villainsArr[Math.floor(Math.random() * villainsArr.length)]
    const duelLocation = duelLocations[Math.floor(Math.random() * duelLocations.length)]
    const spell = spells[Math.floor(Math.random()* spells.length)] 

        heroPara.textContent =  `${hero.fullName}`
        villainPara.textContent =  `${villain.fullName}`
        locationPara.textContent = `${duelLocation}`
        winnerPara.textContent = `${hero.attackPow >= villain.attackPow ? hero.fullName : villain.fullName}`
        spellPara.textContent = `${spell}`;
}

const duelButton = document.querySelector('.duel');
const heroPara = document.querySelector('.hero')
const villainPara = document.querySelector('.villain')
const locationPara = document.querySelector('.location')
const winnerPara = document.querySelector('.winner')
const spellPara = document.querySelector('.spell')




duelButton.addEventListener('click', e => {
duel()
})



