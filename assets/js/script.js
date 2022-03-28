const element_table = document.querySelector(".grid");


for(let i = 1; i <= 100 ; i++){
    if(i % 15 === 0){
        let cella = `<div class="cell  fizzbuzz square--${i}">fizzbuzz</div>`    
        element_table.insertAdjacentHTML("beforeend", cella);
    }else if (i % 3 === 0){
        let cella = `<div class="cell  fizz square--${i}">fizz</div>`    
        element_table.insertAdjacentHTML("beforeend", cella);
    }else if (i % 5 === 0){
        let cella = `<div class="cell buzz square--${i}">buzz</div>`    
        element_table.insertAdjacentHTML("beforeend", cella);
    }else{
        let cella = `<div class="cell square--${i}">${i}</div>`    
        element_table.insertAdjacentHTML("beforeend", cella);
    }
}


