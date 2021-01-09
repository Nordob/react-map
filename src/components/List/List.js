import React, {  } from "react"
import './List.module.css'
import ListItem from "../ListItem/ListItem";
import { connect } from "react-redux";
import { onDeletePoint } from '../../store/actions/action'
 
const List = (props) =>{
	console.log(props.list.length)

	function deleteElem(index) {
		props.onDeletePoint(index)
	}
	console.log(props.list)

	return(
		<div className='List'>
			<div className='List__wrapper'>
				{
					props.list.length === 0 

					? null
					: props.list.map((location, index)=>{
						return(
							<ListItem
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