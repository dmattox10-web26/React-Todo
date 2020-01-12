import React from 'react';
import { Container, Jumbotron, Row, Col, Form, FormGroup, Input, Button, Label } from 'reactstrap'

import Todo from './components/Todo'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      todo: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }
  
  handleChange(e) {
    e.preventDefault()
    this.setState({
      todo: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      todos: [...this.state.todos, {
        todo: this.state.todo,
        id: Date.now(),
        completed: false
      }]
    })
  }

  deleteTodo(id) {

  }

  render() {
    const { todos, todo } = this.state
    return (
      <Container>
        <Row><Col xs='12' style={{textAlign: 'center'}}><h1>React Todo!</h1></Col></Row>
        <Jumbotron className='bg-info'>
          <Form onSubmit={ this.handleSubmit }>
            <FormGroup>
              <Label for='todo' className='text-primary'>Todo:</Label>
              <Input id='todo' name='todo' value={ todo } onChange={ this.handleChange }></Input>
            </FormGroup>
            <Button type='submit'>Add</Button>
          </Form>
        </Jumbotron>
        { todos.map(todo =>
            <Todo todo={ todo } />
          )}
      </Container>
    );
  }
}

export default App;
