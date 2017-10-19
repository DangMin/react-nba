import React, {Component} from 'react'
import {isEmpty, chunk} from 'lodash'
import Loading from '../Misc/Loading'

import {HOME, CORS_PROXY, FETCH_HDS as HEADER, IMAGES} from '../../config/api'
import LeaderBoard from './LeaderBoard'
import Recap from './Recap'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dailyLeaders: {},
      seasonRecap: {},
      seasonLeaders: {},
      editorial: {}
    }
  }

  componentDidMount() {
    fetch(`${CORS_PROXY}${HOME.DAILY}`, {headers: HEADER}).then(response => response.json())
    .then(response => this.setState({ dailyLeaders: response}))
    .catch(console.log("Unable to get daily leaders."))

    fetch(`${CORS_PROXY}${HOME.RECAP}`, {headers: HEADER}).then(response => response.json())
    .then(response => this.setState({seasonRecap: response.items[0]}))
    .catch(console.log("Unable to get season recap."))

    fetch(`${CORS_PROXY}${HOME.SEASON}`, {headers: HEADER})
    .then(response => response.json())
    .then(response => this.setState({seasonLeaders: response}))
    .catch(console.log("Unable to get season leaders."))

    fetch(`${CORS_PROXY}${HOME.EDITORIAL}`, {headers: HEADER})
    .then(response => response.json())
    .then(response => this.setState({editorial: response}))
    .catch(console.log("Unable to get editorial."))
  }

  render() {
    const {dailyLeaders, seasonRecap, seasonLeaders, editorial} = this.state
    const [beyondNumbers, tidbit, spotlight, fantasyNews, assistTracker, shotchart, hpLink] = !isEmpty(editorial) ? editorial.items : Array(7)

    return (
      <div className='content'>
        <h1>Stats Home</h1>
        <hr />
        <div className='flex-horizontal'>
          <div className='sub-content' style={{flex:4}}>
            <LeaderBoard leaders={dailyLeaders}/>
            <hr />
            <Features content={hpLink} />
            <hr />
            <LeaderBoard leaders={seasonLeaders}/>
            <hr />
            <Article content={beyondNumbers} />
            <hr />
            <ShotChart content={shotchart} />
            <hr />
            <Tidbit content={tidbit} />
            <hr />
            <Spotlight content={spotlight} />
            <hr />
            <FantasyNews content={fantasyNews} />
            <hr />
            <AssistTracker content={assistTracker} />
          </div>
          <div className='subSidebar' style={{flex:1}}>
            <Recap content={seasonRecap} />
          </div>
        </div>
      </div>
    )
  }
}

const Features = ({content}) => {
  if (isEmpty(content))
    return <Loading />

  const {title, posts} = content.items[0]
  return (
    <div>
      <h3>{title}</h3>
      <div className='flex-horizontal'>
      {
        chunk(posts, 9).map((col, index) =>
          <div key={`col-${index}`}>
            <ul style={{listStyleType:'none'}}>
              {col.map(post =>
                <li key={post.id} style={{fontWeight:'bold',margin:'20px auto'}}>
                  <a href={post.meta['hp-link']} style={{lineHeight:'1.5',color:'#000',textDecoration:'none'}}>{post.meta['link-description']}</a>
                </li>
              )}
            </ul>
          </div>
        )
      }
      </div>
    </div>
  )
}

const Article = ({content}) => {
  if (isEmpty(content))
    return <Loading />

  const {title, items} = content
  const post = items[0].posts[0]

  return (
    <div>
      <h3>{title}</h3>
      <div className='flex-horizontal'>
        <div style={{background:`linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5)),url('${post.image}')`,backgroundPosition:'center center',backgroundSize:'cover',opacity:'.7',minHeight:'280px',flex:1,position:'relative'}}>
          <h2 style={{color:'#fff',position:'absolute',bottom:0}}>
            <a href={post.meta.beyondthenumber_link}>{post.title}</a>
          </h2>
        </div>
        <div style={{flex:1}} dangerouslySetInnerHTML={{__html:post.content}}/>
      </div>
    </div>
  )
}

const ShotChart = ({content}) => {
  if (isEmpty(content))
    return <Loading />

  const {posts} = content.items[0]
  return (
    <div>
      <h3>{content.title}</h3>
      {
        posts.map(post =>
          <div key={post.id} className='flex-horizontal'>
            <div style={{background:`linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5)),url('${post.image}')`,backgroundPosition:'center center',backgroundSize:'cover',opacity:'.7',minHeight:'280px',flex:1,position:'relative'}} />
            <div style={{flex:1}}>
              <p>{post.meta['shotchart-description']}</p>
              <input type='text' />
              <p><a href={post.meta['shotchart-link-1']}>{post.meta['shotchart-link-1-title']}</a></p>
              <p><a href={post.meta['shotchart-link-2']}>{post.meta['shotchart-link-2-title']}</a></p>
            </div>
          </div>
        )
      }
    </div>
  )
}

const Tidbit = ({content}) => {
  if (isEmpty(content))
    return <Loading />

  const {posts} = content.items[0]
  return (
    <div style={{width:'100%'}}>
    {posts.map(post => <div key={post.id} style={{width:'80%',margin:'100px 10%',textAlign:'center'}}>
      <h2>{post.title}</h2>
      <p><a href={post.meta['tidbit-link']}>{post.meta['tidbit-description']}</a></p>
    </div>)}
    </div>
  )
}

const Spotlight = ({content}) => {
  if (isEmpty(content))
    return <Loading />

  const {posts} = content.items[0]
  return (
    <div>
      <h3>{content.title}</h3>
      {posts.map(post =>
        <div key={post.id} className='flex-horizontal'>
          <div style={{background:`linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5)),url('${post.image}')`,backgroundPosition:'center center',backgroundSize:'cover',opacity:'.7',minHeight:'280px',flex:1,position:'relative'}} />
          <div style={{flex:1}} dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
      )}
    </div>
  )
}

const FantasyNews = ({content}) => {
  if (isEmpty(content))
    return <Loading />

  const {ListItems} = content.items[0]
  return (
    <div>
    <div className='flex-horizontal'>
      <div style={{flex:3}}>
        <h3>{content.items[0].title}</h3>
      </div>
      <div style={{flex:1}}>
        <span><a href={`/${content.items[0].deeplink}`}>See all {content.items[0].title}</a></span>
      </div>
    </div>
    {
      chunk(ListItems, 2).map((sublist, index) =>
        <div key={`news-${index}`} className='flex-horizontal'>
        {
          sublist.map(item =>
            <div style={{flex:1}} key={`${item.UpdateId}-${item.RotoId}`} className='flex-horizontal'>
              <div style={{flex:1}}>
                <a href={`/player/${item.PlayerID}`}>
                  <img style={{width:'80%',borderRadius:'50%'}} src={item.PlayerID ? IMAGES.portrait(item.PlayerID) : ''} alt={`${item.FirstName} ${item.LastName}`} />
                </a>
              </div>
              <div style={{flex:3}}>
                <div>
                  <span style={{fontWeight:'bold',fontSize:'0.8em',padding:'5px 10px',backgroundColor:'#ddd',margin:'0 5px'}}>{`${item.FirstName} ${item.LastName}`}</span>
                  <span style={{fontWeight:'bold',fontSize:'.8em',padding:'5px 10px',color:'#fff',backgroundColor:'#000',margin:'0 5px'}}>{item.Team}</span>
                </div>
                <div>
                  <p style={{fontWeight:'bold'}}>{item.ListItemCaption}</p>
                </div>
                <div>
                  <p style={{color:'#eee',fontSize:'.7em'}}>{item.lastUpdate}</p>
                </div>
              </div>
            </div>
          )
        }
        </div>
      )
    }
    </div>
  )
}

const AssistTracker = ({content}) => {
  if (isEmpty(content))
    return <Loading />

  const [main, result] = content.items,
    total = result.resultSets[0].rowSet[0][0],
    post = main.posts[0]

  return (
    <div>
      <h3>{main.title}</h3>
      <div className='flex-horizontal'>
        <div style={{flex:1}}>
          <p style={{fontSize:'3em',color:'red'}}>{total}</p>
          <p style={{fontWeight:'bold'}}>Total Assists This Season</p>
        </div>
        <div style={{flex:3}} className='flex-horizontal'>
          <div style={{flex:1}}>
            <img style={{width:'100%'}} src={post.meta['assistleader-playerid'] ? IMAGES.portrait(post.meta['assistleader-playerid']) : ''} />
            <p>{post.meta['assistleader-matchup']}</p>
          </div>
          <div style={{flex:6}}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <p><a href={`/game/{post.meta['assistleader-gameid']}`}>View Video Box Score</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
