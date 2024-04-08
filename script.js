let input = document.querySelector("input") ,
    btn = document.querySelector("button") ,
    result = document.querySelector(".text");

    let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos totam earum dolorem corporis fuga similique modi ab commodi blanditiis. Error, similique dolorum iste delectus dolor rem voluptatum modi! Perspiciatis ";

    btn.addEventListener("click" , () => {
        // alert('hello')
        let count = input.value;
        let gen_lorem = "";

        for(let i = 0; i < count; i++){
            gen_lorem += lorem;
        }

        result.innerText = gen_lorem
    })