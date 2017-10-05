import React, {Component} from 'react'

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

class Dropdown extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      list: props.list,
      selected: new Set()
    }

    this.toggleCheckbox = label => {
      if (this.state.selected.has(label)) {
        this.state.selected.delete(label)
      } else {
        this.state.selected.add(label)
      }
    }
  }

	render() {
   return (
   	<div className="dropdown">
   	  <div className="dropdown__header">
   	    <button className="dropdown__button" onClick={onClick}>
   	      Teams
   	    </button>
   	  </div>
      <div className="dropdown__body">
        <ul>
          {list.map(item =>
            <li key={item.label}>
              <Checkbox handleCheckboxChange=this.toggleCheckbox)>
            </li>
          }
        </ul>
      </div>
   	</div>
   )
  }
}

export default Dropdown
