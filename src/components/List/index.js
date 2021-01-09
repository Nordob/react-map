import React, {  } from "react"
import { connect } from "react-redux";

import { onDeletePoint } from '../../store/actions/action'

import Item from "./item";

import {list, wrapper} from  './list.module.css'
 
const List = (props) =>{
	console.log(props.list.length)

	function deleteElem(index) {
		props.onDeletePoint(index)
	}

	return(
		<div className={list}>
			<div className={wrapper}>
				{
					props.list.length === 0 

					? null
					: props.list.map((location, index)=>{
						return(
							<Item
								key={index+'list-item'}
								location={location.location}
								index={index}
								deleteElem={deleteElem}
							/>
						)
					})
				
				}
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	return{
		list: state.points
	}
}

function mapDispatchToProps(dispatch) {
	return{
		onDeletePoint: index => dispatch(onDeletePoint(index))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List)