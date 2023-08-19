import React from 'react'
import Movies from './Movies'
import Row from './Row'
import { requests } from '../Requests'


const Home = () => {
  return (
    <div>
     <Movies/>
     <Row title='Upcoming' fetchURL={requests.requestUpcoming}/>
     <Row title='Popular' fetchURL={requests.requestPopular}/>
     <Row title='Trending' fetchURL={requests.requestTrending}/>
     <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
     <Row title='Horror' fetchURL={requests.requestHorror}/>
    </div>
  )
}

export default Home
