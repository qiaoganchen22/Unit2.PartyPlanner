const root = document.getElementById("root");
const submit=document.getElementById("Submit")

const render= async()=>{
    try {
        const response = await fetch(
            "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/artists",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    const result = await response.json(); //taking whatever u get and putting it into result
    result.data.forEach((element)=>{ //for each loop on data of result
        const div=document.createElement('div')
        div.style.margin = "5%";

        const pName=document.createElement('p')  //create element and display on website
        pName.innerHTML=`Name: ${element.name}`

        const img=document.createElement('img')
        img.src=element.imageUrl

        const pDes=document.createElement('p')
        pDes.innerHTML=`Description: ${element.description}`

        const button =document.createElement('button') 
        button.innerHTML='delete'
        button.id=element.id;
        button.addEventListener('click',deleteEvent)//adding a function for the button



        
        div.appendChild(pName)
        div.appendChild(img)
        div.appendChild(pDes)
        div.appendChild(button)
        root.appendChild(div)
    })


    console.log("Success:", result);
} catch (error) {
  console.error("Error:", error);
}
};

const addEvent=async(e)=>{
    e.preventDefault()
    let name=document.getElementById('name').value
    let imageUrl=document.getElementById('image').value
    let description=document.getElementById('description').value
let obj={
    name,imageUrl,description
}
console.log(obj)
    try{
        const repsonse=await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/artists",{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(obj)
        })
        location.
    }catch(error){
        console.log(error)
    }
}

const deleteEvent=async(e)=>{
    try{
        const response=await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/artists/${e.target.id}`,
        {
            method:'DELETE',
            headers:{
                "Content-Type": "application/json",
            },
        })

    let result=await response
    location.reload()
    }catch(error){
        console.log(error)
    }
}

// function deleteq(e){
//     console.log(e.target.id)
// }
render();
submit.addEventListener("click", addEvent);