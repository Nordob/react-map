import React from 'react'
import classes from'./ListItem.module.css'

const ListItem = ({index, location, deleteElem}) =>{

	return(
		<div className='ListItem'>
			<div className={classes.ListItem__wrapper}>
				<p className='ListItem__point'>{location}</p>
				<span 
					className={classes.ListItem__close}
					onClick={()=>{deleteElem(index)}}
				>x</span>
			</div>
		</div>
	)
}

export default ListItem