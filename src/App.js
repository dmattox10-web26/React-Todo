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
    this.deleteTodos = this.deleteTodos.bind(this)
    this.completeTodo = this.completeTodo.bind(this)
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

  deleteTodos() {
    this.setState(state => {
      const todos = this.state.todos.filter(todo => todo.completed === false)
      return {
        todos
      }
    })
  }

  completeTodo(id) {
    this.setState(state => {
      const todos = this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
          return todo
        }
        else return todo
      })
      return {
        todos
      }
    })
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
            <div onClick={ () => this.completeTodo(todo.id) }>
              <Todo todo={ todo }/>
            </div>
          )}
          <Row>
            <Button onClick={ () => this.deleteTodos() }>Clear Completed!</Button>
          </Row>
      </Container>
    );
  }
}

export default App;
