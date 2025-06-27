import React,{useState} from 'react'



export default function TextForm(props) {
    const[count,setcount]=useState("");
    function handleLike() {
    console.log("teri makichu",count);
    setcount(count.toUpperCase());
    props.showalert("converted to uppercase",'success')
     // 🔸 Step 3: state update via setLikes
  }

  function handledown() {
    console.log("teri makichu",count);
    setcount(count.toLowerCase());
     // 🔸 Step 3: state update via setLikes
  }

function handle(event){
    
    setcount(event.target.value)
}
  return (

      <>
<div>
    {count}
<h1>{props.heading}-{count}</h1>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="mybox" className="form-label">Example textarea</label>
  <textarea className="form-control" value={count} onChange={handle} id="exampleFormControlTextarea1" rows="5"></textarea>
  <button onClick={handleLike}className="uc mx-2">convert to uppercase</button>
  <button onClick={handledown}>convert to lower case</button>
</div>


</div>
<div className='container my-3'>
    <h1>your text summary</h1>
    <p>{count.split(' ').length} words,{count.length}characrtes</p>
    <p>{0.008*(count.split(' ').length)}minutes</p>
    <h2>PREVIEW</h2>
    <p>{count}</p>
</div>
</>
    
  )
}
