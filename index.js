let page = 1;
let limit = 10;
let todos = [];

fetch("https://jsonplaceholder.typicode.com/todos")
.then((data)=>{
    console.log(data);
    return data.json();
}).then((data)=>{
    todos = data
    render();

})

function render(){
    const sliceTodos = todos.slice((page-1)*limit, page*limit);
    const TodoLi = sliceTodos.reduce((a,b)=>{
        return(a +=`
            
            <div class="card col-3 ms-3 mt-3">
                <div id="box" class="card-body">
                    <h5>${b.title}</h5>
                    <h6>${b.completed ? `<span style="color:green">complete</span>` : `<span style="color:red">not complete</span>`}</h6>
                </div>
            </div>
        `
            )
    },'')
    document.getElementById("box").innerHTML=TodoLi;
    document.getElementById("page-number").innerHTML=page;

    if(page > 1){
        document.getElementById("previous").classList.remove("disable");
    }if(page = 1){
        document.getElementById("previous").classList.add("enable");
    }
}
    document.getElementById("previous").addEventListener("click",()=>{
        page = page=1;
        render()
    })
    document.getElementById("next").addEventListener("click",()=>{
        page = page+1;
        render()
    })