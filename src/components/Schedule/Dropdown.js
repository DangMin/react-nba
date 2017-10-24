import React from 'react'

const toArray = obj => Object.keys(obj).map(item => obj[item])

class Dropdown extends React.Component {
	render() {
    const {list, name, handler, children, selected} = this.props
    return (
     	<div className="dropdown">
     	  <span>{children}:&nbsp;</span>
        <div className="dropdown__body">
				{
					name === 'teams' ?
						<TeamCheckboxes list={list} handle={handler} inputName={name} selected={selected}/> :
						<Checkboxes list={list} handle={handler} inputName={name} selected={selected} />
				}
        </div>
     	</div>
     )
    }
}

const Checkboxes = ({list, inputName, handle, selected}) =>
	<ul>
		{list.map(item =>
			<li key={item}>
				<input
					name={inputName}
					type='checkbox'
					value={item}
					onChange={handle}
					checked={selected.includes(item) ? true : false}/>
				<label>&nbsp;{item}</label>
			</li>
		)}
	</ul>

const TeamCheckboxes = ({list, inputName, handle, selected}) => {
  return (<ul>
		{
			toArray(list).map(item =>{
				const {code, city, name} = item
				return (<li key={code}>
					<input
						name={inputName}
						type='checkbox'
						value={code}
						onChange={handle}
						checked={selected.includes(code) ? true : false}
					/>
					<label>&nbsp;{city} {name}</label>
				</li>)
			})
		}
  </ul>)
}

export default Dropdown
