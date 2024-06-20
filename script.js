// JavaScript goes here.

let schaudenfreude = 0
let comp = 0

let img = ''
let text = ''

let finalDiv = document.querySelector('.final')
let secondLastDiv = document.querySelector('.result')

let q1_button = document.querySelector('.submit1')


let q2_button = document.querySelector('.submit2')


let q3_button = document.querySelector('.submit3')


let results = document.querySelector('.results')

q1_button.addEventListener('click', function() {
    let q1_answer = document.querySelector('.power').value
    if (q1_answer.toLowerCase() === 'yes') {comp = 1}
    
})

q2_button.addEventListener('click', function() {
    let q2_answer = document.querySelector('.suffer').value
    if (parseInt(q2_answer) > 5) {schaudenfreude = 1}
})

q3_button.addEventListener('click', function() {
    let q3_answer = document.querySelector('.win').value
    if (q3_answer.toLowerCase() === 'yes') {comp = 1}
})

results.addEventListener('click', function(){
    if (schaudenfreude === 0 && comp === 0){text = 'Youre a green shell! You arent very worried about winning, nor making others upset.', img = 'https://th.bing.com/th/id/R.fec059c1365d607ad786264e6214e6f8?rik=%2fytMgSH%2bZ1Ksnw&pid=ImgRaw&r=0'}
    
    else if (schaudenfreude > 0 && comp === 0) {text = 'Youre a blue shell! You dont care about winning, you just want to make others mad.', img = 'https://i.redd.it/yz95rawgpcwy.png'}

    else if (schaudenfreude > 0 && comp > 0) {text = 'Youre a red shell! Winning and power are at least of some importance, and you love making others mad.', img = 'https://th.bing.com/th/id/OIP.5QjRR_4QU8cjajUix-Tf5QHaGX?rs=1&pid=ImgDetMain'}

    else if (schaudenfreude === 0 && comp > 0) {text = 'Youre a bullet bill! You dont care about angering others, you just want a powerful item to help you win.', img = 'https://th.bing.com/th/id/OIP.jCYsuU5f26NmwlZ8LJfVUgHaEm?rs=1&pid=ImgDetMain'}


    secondLastDiv.innerHTML = text;
    finalDiv.innerHTML = `<img src="${img}" alt="Result Image">`;
    

    
})



