import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import history from '../../utils/index'

class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    render() {
        return (<div>
            The count is {this.props.count}
            <button onClick={this.props.increment}>increment</button>
            <button onClick={this.props.incrementAsync}>incrementAsync</button>
            <a href="/play">A标签跳转</a>
            <Link to="/play"><button>Link跳转</button></Link>
            <button onClick={this.handleClick}>点击跳转</button>
          </div>)
    }
    handleClick() {
        history.push("/play", {some: 'state'})
    }
}

const mapState = state => ({
    count: state.count
})

const mapDispatch = ({count: {increment, incrementAsync}}) => ({
    increment: () => {increment(1)},
    incrementAsync: () => {incrementAsync(1)}
})

export default connect(mapState, mapDispatch)(Count)