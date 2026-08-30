let search = document.querySelector("#button");
let respond = document.querySelector("#response");

async function get_response() {
        let prompt = document.querySelector("#prompt").value;
        try{
                let response = await fetch("http://localhost:11434/api/generate",
                        {
                        method : "POST",
                        headers : {
                                "Content-Type" : "application/json"
                        },
                        body : JSON.stringify({
                                model : "llama3.2",
                                prompt : prompt,
                                stream : false
                        })
                });
                
                let data = await response.json();
                respond.innerText = data.response;

        }
        catch(e){
                console.log(e);
        }
}

