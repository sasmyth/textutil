import React,{useState} from 'react'


export default function About(props) {
   const [mystyle,setmystyle]=useState({color:'white',backgroundColor:'black'})
   const[btn,setbtn]=useState("enable dark mode")



    function dark(){
        if(mystyle.color==='white'){
        setmystyle({color:'black',backgroundcolor:'white'})
        setbtn('enable dark mode')
    }
    else{
        setmystyle(
            {color:'white',backgroundColor:'black'}
        )
        setbtn('enable light mode')
    }
    }
        
    



console.log(props.name);



  return (
    <div className="container" style={mystyle}>about
        
           <div class="card" >
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <button onClick={dark}>{btn}</button>
  </div>
</div>
    </div>
  )
}

