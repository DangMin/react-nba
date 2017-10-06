import React, {Component} from 'react'
import {map} from 'lodash'

const onClick = _ => {
	var dropdownBtns = document.getElementsByClassName('dropdown__button')
  Array.prototype.forEach.call(dropdownBtns, btn => {
    btn.addEventListener('click', e => {
    console.log('click')
      const targets = e.target.parentNode.parentNode.getElementsByClassName('dropdown__body')
      Array.prototype.forEach.call(targets, target => {
      	if (!target.classList.contains('dropdown__body--show')) {
        	target.classList.add('dropdown__body--show')
        } else {
        	target.classList.remove('dropdown__body--show')
        }
      })
    })
  })
}

const toArray = obj => Object.keys(obj).map(item => obj[item])

class Dropdown extends React.Component {
	render() {
    const {list, name, handler, children} = this.props
    return (
     	<div className="dropdown">
     	  <span>{children}:&nbsp;</span>
        <div className="dropdown__body">
				{
					name === 'teams' ?
						<TeamCheckboxes list={list} handle={handler} inputName={name}/> :
						<Checkboxes list={list} handle={handler} inputName={name} />
				}
        </div>
     	</div>
     )
    }
}

const Checkboxes = ({list, inputName, handle}) =>
	<ul>
		{list.map(item =>
			<li key={item}>
				<input name={inputName} type='checkbox' value={item} onChange={handle} />
				<label>{item}</label>
			</li>
		)}
	</ul>

const TeamCheckboxes = ({list, inputName, handle}) => {
  return (<ul>
		{
			toArray(list).map(item =>{
				const {code, city, name} = item
				return (<li key={code}>
					<input name={inputName} type='checkbox' value={code} onChange={handle} />
					<label>{city} {name}</label>
				</li>)
			})
		}
  </ul>)
}

export default Dropdown
