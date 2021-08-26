                    // ******************** Grey Scale SECTION START******************** //
        // This function takes a random number from 0 - 255 and adds it to the element background style as an rgb.
        function greyScaleFun() {
            let rNum = Math.floor(Math.random() * 255) + 1
            this.setAttribute('style', `background-color: rgb(${rNum},${rNum},${rNum})`);
            this.setAttribute('data-grey', true);
        }
        // This function takes all divs in the main div and removes all event listeners, then adds the function above as an event listener.
        function greyScale() {
            const miniDiv = document.querySelectorAll(`.mini-div`);
            miniDiv.forEach(div => div.removeEventListener('mouseover', greyScaleFun));
            miniDiv.forEach(div => div.removeEventListener('mouseover', rainbowBlackFun));
            miniDiv.forEach(div => div.removeEventListener('mouseover', classicFun));
            miniDiv.forEach(div => div.removeEventListener('mouseover', rainbowFun));
            miniDiv.forEach(div => div.addEventListener('mouseover', greyScaleFun));
            }  
                    // ******************** Grey Scale SECTION END******************** //

// This function asks the user how many small divs to add to the 
function resetS() {
    const miniDiv = document.querySelectorAll(`.mini-div`);
    let n = prompt("How many?");
    while (n>100 || isNaN(n) || n%1 !== 0) {
        n = prompt("Limit is 100, how many? (Please insert a number)")
    };
    let main_container = document.getElementById('main_container');
    main_container.setAttribute('style', `grid-template-rows: repeat(${n}, minmax(0, 1fr)); grid-template-columns: repeat(${n}, minmax(0, 1fr));`);
    
    n = n * n;
    main_container.querySelectorAll("*").forEach(d => d.remove());
    
    for (let i=0; i<n; i++) {
        var mini_div = document.createElement('div');
        mini_div.className = 'mini-div';
        document.getElementById('main_container').appendChild(mini_div);
    };
    classic();
}
                    // ********************RAINBOW SECTION START******************** //

function rainbowFun(){
            let rNum = Math.floor(Math.random() * (255 + 1));
            let gNum = Math.floor(Math.random() * (255 + 1));
            let bNum = Math.floor(Math.random() * (255 + 1));
            this.setAttribute('style', `background-color: rgb(${rNum},${gNum},${bNum})`);
            this.setAttribute('data-grey', true);
        }

function rainbow() {
        const miniDiv = document.querySelectorAll(`.mini-div`);
        miniDiv.forEach(div => div.removeEventListener('mouseover', greyScaleFun));
        miniDiv.forEach(div => div.removeEventListener('mouseover', rainbowBlackFun));
        miniDiv.forEach(div => div.removeEventListener('mouseover', classicFun));
        miniDiv.forEach(div => div.removeEventListener('mouseover', rainbowFun));
        miniDiv.forEach(div => div.addEventListener('mouseover', rainbowFun));
}
                    // ********************RAINBOW SECTION END******************** //

                    // ********************RAINBOW + 10% DARKER SECTION START******************** //
function rainbowBlackFun(){
    // This if statement checks if the element has an style attribute
    if(this.hasAttribute('data-grey') == true){
        this.removeAttribute("style");
        this.removeAttribute('data-grey');
    } 
    if(!this.hasAttribute('style')) { //
        var rNum = Math.floor(Math.random() * (255 + 1));
        var gNum = Math.floor(Math.random() * (255 + 1));
        var bNum = Math.floor(Math.random() * (255 + 1));
        this.setAttribute('style', `background-color: rgb(${rNum},${gNum},${bNum})`);
        let rNum1 = rNum * (10/100);
        let gNum1 = gNum * (10/100);
        let bNum1 = bNum * (10/100);
        this.setAttribute('data-key1',`${rNum}`);
        this.setAttribute('data-key2',`${gNum}`);
        this.setAttribute('data-key3',`${bNum}`);
        this.setAttribute('data-key4',`${rNum1}`);
        this.setAttribute('data-key5',`${gNum1}`);
        this.setAttribute('data-key6',`${bNum1}`);
    } else if(this.hasAttribute('style')) {
        rNum  = (this.getAttribute('data-key1')) - (this.getAttribute('data-key4'));
        gNum  = (this.getAttribute('data-key2')) - (this.getAttribute('data-key5'));
        bNum  = (this.getAttribute('data-key3')) - (this.getAttribute('data-key6'));
        this.setAttribute('data-key1',`${rNum}`);
        this.setAttribute('data-key2',`${gNum}`);
        this.setAttribute('data-key3',`${bNum}`);
        this.setAttribute('style', `background-color: rgb(${rNum},${gNum},${bNum})`);
    } else {
        return;
    }
    }

function rainbowBlack() {
        const miniDiv = document.querySelectorAll(`.mini-div`);
        miniDiv.forEach(div => div.removeEventListener('mouseover', greyScaleFun));
        miniDiv.forEach(div => div.removeEventListener('mouseover', rainbowBlackFun));
        miniDiv.forEach(div => div.removeEventListener('mouseover', classicFun));
        miniDiv.forEach(div => div.removeEventListener('mouseover', rainbowFun));
        miniDiv.forEach(div => div.addEventListener('mouseover', rainbowBlackFun));
}
                        //******************** RAINBOW + 10% DARKER SECTION END ******************** //
  
                        //******************** classic SECTION START ******************** //
function classicFun(){
    this.classList.add('mini-div-dark')}

function classic() {
const miniDiv = document.querySelectorAll(`.mini-div`);miniDiv.forEach(div => div.removeEventListener('mouseover', greyScaleFun));
miniDiv.forEach(div => div.removeEventListener('mouseover', rainbowBlackFun));
miniDiv.forEach(div => div.removeEventListener('mouseover', classicFun));
miniDiv.forEach(div => div.removeEventListener('mouseover', rainbowFun));
miniDiv.forEach(div => div.removeEventListener('mouseover', classicFun ));    
miniDiv.forEach(div => div.addEventListener('mouseover', classicFun ));
};
                        //******************** classic SECTION END ******************** //

document.addEventListener('DOMContentLoaded', function() {
    var div = document.createElement('div');
    div.id = 'main_container';
 
    document.body.appendChild(div);

    for (let i=0; i<256; i++) {
        var mini_div = document.createElement('div');
        mini_div.className = 'mini-div';
        document.getElementById('main_container').appendChild(mini_div);
    }
    classic();
}, false);


