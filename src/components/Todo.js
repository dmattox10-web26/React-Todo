import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class Todo extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        const { todo } = this.props
        return (
            <div className={todo.completed ?
                                'bg-warning' :
                                'bg-secondary'}
                style={{borderRadius: '1rem'}}>
            <Row style={{margin: '0.5rem'}}>
                <Col xs='2'></Col>
                <Col xs='8'><h4 style={{padding: '0.5rem'}}>{todo.todo}</h4></Col>
                <Col xs='2'></Col>
            </Row>
            </div>
        )
    }
}

export default Todo