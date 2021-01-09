import React from 'react'
import { item, wrapper, close } from './item.module.css'

const ListItem = ({index, location, deleteElem}) =>{

	return(
		<div className={item}>
			<div className={wrapper}>
				<p className='ListItem__point'>{location}</p>
				<span 
					className={close}
					onClick={()=>{deleteElem(index)}}
				>x</span>
			</div>
		</div>
	)
}

export default ListItem