let btn = document.querySelector(".btn");
let type = document.querySelector(".typeAns")
let quesn = document.querySelector(".question p");
let ans = document.querySelector(".answer p");
let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";


async function ques(){
    quesn.innerText = "";
    ans.innerText = "";
    type.innerText = "";

    try{
        let resQues = await axios.get(url);
        console.log(resQues);
        if(resQues.data.type == "twopart"){
            let answer = resQues.data.delivery;   
            let question = resQues.data.setup;
            let category = resQues.data.category;

            type.innerHTML = `<p class"typeAns">${category}</p>`;
            quesn.innerHTML = `<p>${question}</p>`;
            ans.innerHTML = `<p>${answer}🤣🤣</p>`;
        }else{
            let joke = resQues.data.joke;
            let category = resQues.data.category;

            type.innerHTML = `<p class"typeAns">${category}</p>`;
            quesn.innerHTML = `<p>${joke}🤣🤣</p>`;
        }
    }catch(err){
        alert("An ERROR occured while fetching the joke!");
        console.log(err);
    }
    
}

btn.addEventListener("click",ques);