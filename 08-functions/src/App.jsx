// import React from 'react'

const App = () => {

function changeUser() {
  console.log('change user')
}

function mouseenter() {
  console.log('mouse entered')
}

function inputchange(x){
  console.log(x)
}

function pagescroll(x) {
  console.log(x)
  if(x>0) {
    console.log('scrolling down')
  } else {
    console.log('scrolling up')
  }
}

  return (
    <div>
      {/* <h1>Hello World</h1> */}

      <button onMouseEnter={mouseenter} onClick={changeUser}>change user</button>
      {/* <button onClick={changeUser()}>change user</button> //click na krleo automatically call ho zabe cz direct function call hocche */}

      <button onClick={function() {
        console.log('change user')
      }}>click here</button>


      <input type="text" placeholder='enter something' onChange={inputchange} />

      <input onChange={function(elem) {
        console.log(elem)
        console.log(elem.target)
        console.log(elem.target.value)
        inputchange(elem.target.value)
      }} type="text" placeholder='enter name' />

      <div onMouseMove={function(elem) {
        console.log("thsi sis x",elem.clientX)
        console.log("this is y",elem.clientY)
      }} className='h'>Move mouse here

      </div>

<div onWheel={function(elem) {
  pagescroll(elem.deltaY)
}}>
  <div className='page1'>Scroll me</div>
  <div className='page2'>Scroll me</div>
  <div className='page3'>Scroll me</div>
</div>

    </div>
  )
}

export default App