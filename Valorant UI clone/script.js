let description =document.querySelector('.details');
let partystatustxt = document.querySelector('.party-status-txt')
let checkbox = document.querySelector('#one')
let slider = document.querySelector('.right-bar')
let compi =document.querySelectorAll('.lower-nav-item')

function changepartystatus() {
    console.log(partystatustxt.textContent)

    setTimeout(() => {

        checkbox.checked == true ? partystatustxt.textContent = "OPEN PARTY" :  partystatustxt.textContent = "CLOSED PARTY"
    }, 200);

}


compi.forEach(ele=>{

    ele.addEventListener('click',(e)=>{


        compi.forEach(ele=>{
            ele.classList.remove("active")
        })

        e.target.classList.add("active")

        let data =e.target.textContent
        console.log(data);
        if(data ==="COMPETITIVE"){description.textContent=`
        
        Competitive:  standard VALORANT gameplay. Same rules as unrated but a higher stakes mode where you earn and compete for rank
        `}

        if(data ==="DEATHMATCH"){description.textContent=`
            Deathamatch : a quick free for all deathmatch thats great for practicing valorant gunplay, no abilities ,first 40 kills  wins

        `}

        if(data ==="ESCALATION"){description.textContent=`
        
        ESCALATION:  in this a quick deathmatch mode ,race through a series of 12 weapons and abilities  with your team , first team to compete the final level wins
        `}

        if(data ==="CUSTOM GAME"){description.textContent=`
        
        Custom game :  a game mode to play with your friends in custom rooms
        `}

        if(data ==="SPIKE RUSH"){description.textContent=`
        
        Spike rush : lower stakes VALORANT gameplay. Same rules as unrated with added powerup orbs and randomize weapons
        `}


    })
})

function handlerightbar(){
    slider.classList.add('slide')
}
function handleclose(){
    setTimeout(() => {
        
        slider.classList.remove('slide')
    }, 500);
}