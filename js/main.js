console.log('hello blog. this is my front!');
// 1º Hacer una petición GET para obtener el json para pintar el DOM

const API_ENDPOINT = 'https://localhost:7094/posts';



let list_posts;

function printPosts(data) {
    
    document.getElementById('post').innerHTML = "<p>Modificao con vanilla JS </p>";    
    // /console.log(data);
  
    let post_container = document.getElementById('post_container');
    
    data.forEach(element => {
      
      	const div = document.createElement('DIV');
      
        const h3 = document.createElement('h3');
      	h3.textContent = element.content;
      
      	div.appendChild(h3);
      
        const p_author = document.createElement('p')
        div.appendChild(p_author);


        post_container.appendChild(div);
    });


}



fetch(API_ENDPOINT,{mode:'cors'})
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        printPosts(data);
    })
    .catch(error => console.error('Me he morido ' + error))

// TIENES QUE HACER ESTO

