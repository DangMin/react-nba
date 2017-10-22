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
        <div className='tabs__navs'>
          {title ? <div><h3 className='article__title flex-cell'>{title}</h3></div> : <div />}
          <div className='flex-cell--2'>
            {
              tabs.map((tab, index) => <span key={index} onClick={this.switchTab.bind(this, index)} className={index===selected?'tab__active':''}>{tab}</span>)
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
