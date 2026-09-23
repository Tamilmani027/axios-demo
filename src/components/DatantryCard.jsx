import React from 'react'

function DatantryCard({setPopup}) {
	return (
		<>
			<div className='DatantryCard'>
				<input className='user-input' type='text' placeholder='Name' required></input>
				<input className='user-input' type='number' placeholder='Age' required></input>
				<input className='user-input' type='email' placeholder='Email' required></input>
				<input className='user-input' type='tel' placeholder='Mobile No' required></input>
			<button className='btn-add' onClick={()=>setPopup(false)}>Add</button>
		</div>
		</>
	
	)
}

export default DatantryCard