import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  render() {
    return (
        <Container>
          <Title>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id}>
            {(provided) => (
              <TaskList
                innerRef={provided.innerRef}
                {...provided.droppableProps}
              >
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index}/>
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
    )
  }
}

// Droppable expects its child to be a function!
// The first argument is 'provided', which is an object.
// Its 'droppableProps' needs to be passed in as a prop to the droppable component. You can pass them in individually as well, but we won't do it here.
// innerRef is needed to pass the DOM node of our component to react-beautiful-dnd.
// placeholder is used to increase the space in a droppable component during a drag if it is needed.
