import React, {Component} from 'react'

class C extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: 0
    }

    this.switchTab = this.switchTab.bind(this)
  }

  switchTab = index => {
    this.setState({selected: index})
  }

  render() {
    const {title, tabs, children} = this.props
    const {selected} = this.state
    return(
      <div className='tabs'>
        <div className='tabs__navs' style={{display:'flex'}}>
          {title ? <div><h3>{title}</h3></div> : <div />}
          <div>
            {
              tabs.map((tab, index) => <span style={{margin:'5px',backgroundColor:'#ddd',padding:'3px 5px'}} key={index} onClick={this.switchTab.bind(this, index)}>{tab}</span>)
            }
          </div>
        </div>
        <div className='tabs__content'>
          {
            children.map((child, index) => {
              return (<div key={index} className={index===selected?'':'hidden'}>{child}</div>)
            })
          }
        </div>
      </div>
    )
  }
}


export default C
