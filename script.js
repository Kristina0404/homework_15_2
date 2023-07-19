/* Необходимо получить массив объектов ToDO 
с сервера https://jsonplaceholder.typicode.com/users/1/todos
 используя fetch (см. код написанный в классе) и отобразить их на странице*/

const objElement = document.getElementById("text");

 
 function loadArray(){
    let response = fetch('https://jsonplaceholder.typicode.com/users/1/todos');
    response.then((response)=>{
        dataPromise =response.json();
        dataPromise.then((obj)=>{
            console.log(obj);
            obj.forEach(element => {
                console.log(element);
                const {userId, id, title, completed}= element;
                objElement.textContent += `userId: ${userId} id: ${id} title: ${title} completed: ${completed}`;
            });
        }
        )
    });

}
loadArray();


