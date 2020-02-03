var btn1 = document.getElementById('button');
btn1.addEventListener('click', getJokes);

function getJokes(e){
    //ajax
    const number = document.getElementById('number').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true)
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            //console.log(response);
            let output = '';

            if(response.type === 'success'){
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`
                })
            }


            document.getElementById('output').innerHTML = output;
        }  
    } 
    xhr.send();
}
