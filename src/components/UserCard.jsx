import React from 'react'

function UserCard({user}) {
	
	return (
		<div className='UserCard'>
			<p>Name :{user.name}</p>
			<p>Age :{user.age}</p>
			<p>Email :{user.email}</p>
			<p>Mobile :{user.number}</p>
			<div className='userbtn'>
				<button className='btn-edit'>Edit</button>
				<button className='btn-delete'>Delete</button>
			</div>
		</div>
	)
}

export default UserCard