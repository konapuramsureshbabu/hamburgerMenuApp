import {Component} from 'react'

import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {BsFillInfoCircleFill} from 'react-icons/bs'

import Header from '../Header'

import './index.css'

class NotFound extends Component {
  state = {onClickIcon: false}

  clickIcon = () => {
    this.setState(prevState => ({
      onClickIcon: !prevState.onClickIcon,
    }))
  }

  render() {
    const {onClickIcon} = this.state
    return (
      <div>
        <Header onClickIcon={onClickIcon} clickIcon={this.clickIcon} />
        <div className="home-bg">
          {onClickIcon === false ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="img"
              />
              <h1> Lost Your Way?</h1>
              <p>
                Sorry, we cannot find that page. You will find lots to explore
                on the home page
              </p>
            </div>
          ) : (
            <div className="container">
              <Link to="/" className="button">
                <AiFillHome className="icon" />
                Home
              </Link>
              <Link to="/about" className="button">
                <BsFillInfoCircleFill className="icon" />
                About
              </Link>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default NotFound
