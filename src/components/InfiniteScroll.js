import { useState, useEffect, useRef } from 'react'

const divStyle = {
  color: 'blue',
  height: '250px',
  textAlign: 'center',
  padding: '5px 10px',
  background: '#eee',
  marginTop: '15px'
}

const containerStyle = {
  maxWidth: '1280px',
  margin: '0 auto',
}

const InfiniteScroll = () => {
  const [postList, setPostList] = useState({list: [1,2,3,4]})
  const [page, setPage] = useState(1)
  const loader = useRef(null)

  const handleObserver = (entities) => {
    const target = entities[0]
    if (target.isIntersecting) {   
      setPage((page) => page + 1)
    }
  }

  return (
    <div className="container" style={containerStyle}>
      <div className="post-list">
        {postList.list.map((post, index) => {
          return <div key={index} className="post" style={divStyle}>
            <h2> {post} </h2>
          </div>
        })}
        <div className="loading">
          <h2>Load More</h2>
        </div>
      </div>
    </div>
  )
}

export default InfiniteScroll