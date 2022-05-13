
const generalFuncs = () => {

    function reset() {
        //delete ship containers then remake - should solve issue with duplicating event listeners
        let shipcontainers = document.querySelectorAll('.page .ship-container'); 
        shipcontainers.forEach(container => {
            container.remove(); 
        })
    
        for (let i = 0; i<5; i++) {
            let div = document.createElement('div'); 
            div.classList.add('ship-container');
            document.querySelector('.page2 .container').append(div); 
        }
    
    
        //reset variables
        gridPopulated = [];
        gridPopulatedAI = []; 
    
        document.querySelector('.page2 .container').classList.remove('hidden');
        document.querySelector('.page2 button').classList.add('hidden');
    
    }

    function validateUsername() {
        let pass = true; 
        let errors = []; 
        let ul = document.querySelector('.err-msg'); 
        ul.innerHTML = ''; 

        if (String(username.value).trim() == '') {
            errors.push('username must not be blank'); 
            pass = false;
        }
        if (username.value.length < 3){
            errors.push('username must be greater than 3'); 
            pass=false;
        }
        
        if(/\s/ig.test(username.value)) {
            errors.push('username must not contain spaces');
            pass=false;
        }
        for(let err of errors) {
            let li = document.createElement('li'); 

            li.innerText = err; 
            ul.append(li)

        }

        return pass; 
    }

    function getElLoc( el ) {
        const rect = el.getBoundingClientRect(); 
        return {
            left: rect.left + window.scrollX, 
            right: rect.right - window.scrollX, 
            top: rect.top + window.scrollY, 
            bottom: rect.bottom - window.scrollY
        }
    }

    function nextScreen(curr, next) {
        document.querySelector(`.${curr}`).classList.add('hidden'); 
        document.querySelector(`.${next}`).classList.remove('hidden'); 
    }

    return {
        reset, 
        validateUsername, 
        getElLoc, 
        nextScreen
    }
}



module.exports = generalFuncs