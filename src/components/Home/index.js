import React, {Component} from 'react'
import {isEmpty, chunk, take, keyBy} from 'lodash'
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

    if (isEmpty(dailyLeaders) || isEmpty(seasonRecap) || isEmpty(seasonLeaders) || isEmpty(editorial))
      return <Loading />

    const [beyondNumbers, tidbit, spotlight, fantasyNews, assistTracker, shotchart, hpLink] = editorial.items
    return (
      <div className='flex-box'>
        <div className='main-content flex-cell--4'>
          <LeaderBoard className='daily-leaders' leaders={dailyLeaders}/>
          <LinkList content={hpLink} />
          <LeaderBoard className='season-leaders' leaders={seasonLeaders}/>
          <Article content={beyondNumbers} />
          <ShotChart content={shotchart} />
          <Tidbit content={tidbit} />
          <Spotlight content={spotlight} />
          <FantasyNews content={fantasyNews} />
          <AssistTracker content={assistTracker} />
        </div>
        <div className='subSidebar flex-cell'>
          <Recap content={seasonRecap} />
        </div>
      </div>
    )
  }
}

const getCoverImage = (link) => {
  return {
    backgroundImage:`url('${link}')`
  }
}

const LinkList = ({content}) => {
  const {title, posts} = content.items[0]
  return (
    <div className='main-content__cell'>
      <h3 className='article__title'>{title}</h3>
      <div className='flex-box'>
      {
        chunk(posts, 9).map((col, index) =>
          <div className='flex-cell' key={`col-${index}`}>
            <ul className='linklist'>
            {
              col.map(item =>
                <li key={item.id} className='linklist__item'>
                  <a href={item.meta['hp-link']}>{item.meta['link-description']}</a>
                </li>
              )
            }
            </ul>
          </div>
        )
      }
      </div>
    </div>
  )
}

const Article = ({content}) => {
  const {title, items} = content
  const post = items[0].posts[0]

  return (
    <div className='article'>
      <h3 className='article__title'>{title}</h3>
      <div className='flex-box'>
        <div className='article__cover flex-cell'>
          <a className='article__cover-link' href={post.meta['beyondthenumber-link']}>
            <div className='article__cover--image' style={getCoverImage(post.image)} />
            <h2>{post.title}</h2>
          </a>
        </div>
        <div className='flex-cell article__content' dangerouslySetInnerHTML={{__html:post.content}}/>
      </div>
    </div>
  )
}

const ShotChart = ({content}) => {
  const {posts} = content.items[0]
  return (
    <div className='article'>
      <h3 className='article__title'>{content.title}</h3>
      {
        posts.map(post =>
          <div key={post.id} className='flex-box'>
            <div className='flex-cell article__cover'>
              <div className='flex-cell article__cover--image' style={getCoverImage(post.image)} />
            </div>
            <div className='flex-cell article__content'>
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
    <div className='tidbit'>
    {posts.map(post => <div key={post.id}>
      <h2 className='article__title'>{post.title}</h2>
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
    <div className='article'>
      <h3 className='article__title'>{content.title}</h3>
      {posts.map(post =>
        <div key={post.id} className='flex-box'>
          <div className='flex-cell article__cover'>
            <div className='flex-cell article__cover--image' style={getCoverImage(post.image)} />
          </div>
          <div className='flex-cell article__content' style={{flex:1}} dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
      )}
    </div>
  )
}

const FantasyNews = ({content}) => {
  if (isEmpty(content))
    return <Loading />

  try {
    const {ListItems} = content.items[0]
    return (
      <div className='fantasynews article'>
        <div className='fantasynews__header'>
          <div style={{flex:3}}>
            <h3 className='article__title'>{content.items[0].title}</h3>
          </div>
          <div style={{flex:1}}>
            <span><a href={`/${content.items[0].deeplink}`}>See all {content.items[0].title}</a></span>
          </div>
        </div>
        {
          chunk(ListItems, 2).map((sublist, index) =>
            <div key={`news-${index}`} className='flex-box'>
            {
              sublist.map(item =>
                <div key={`${item.UpdateId}-${item.RotoId}`} className='headline'>
                  <div className='headline__image flex-cell'>
                    <a href={`/player/${item.PlayerID}`}>
                      <img src={item.PlayerID ? IMAGES.portrait(item.PlayerID) : ''} alt={`${item.FirstName} ${item.LastName}`} />
                    </a>
                  </div>
                  <div className='headline__content flex-cell--3'>
                    <div className='headline__content--header'>
                      <span className='headline__content--header-name'>{`${item.FirstName} ${item.LastName}`}</span>
                      <span className='headline__content--header-team'>{item.Team}</span>
                    </div>
                    <div className='headline__content--content'>
                      <p>{item.ListItemCaption}</p>
                    </div>
                    <div className='headline__content--date'>
                      <p>{item.lastUpdate}</p>
                    </div>
                  </div>
                </div>
              )
            }
            </div>
          )
        }
      </div>
  )}
  catch (err) {
    return (<div />)
  }
}

const AssistTracker = ({content}) => {
  if (isEmpty(content))
    return <Loading />

  const [main, result] = content.items,
    total = result.resultSets[0].rowSet[0][0],
    post = take(main.posts)

  return (
    <div className='assistleader'>
      <h3 className='article__title'>{main.title}</h3>
      <p className='assistleader__summary'>
        <span className='assistleader__number'>{total}</span> assists total this season
      </p>
      <div className='assistleader__posts'>

      </div>
    </div>
  )
}

export default Home
