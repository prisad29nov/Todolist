import React from 'react';
import { useState } from 'react';
import moment from 'moment';

const Todo = () => {
  const [state, setState] = useState({
    task: '',
    description: '',
    dueDate: '',
  });

  const [tasks, setTasks] = useState([]);

  const changeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const clickEvent = () => {
    setTasks([...tasks, state]);
    setState({
      task: '',
      description: '',
      dueDate: '',
    });
  };

  const deleteTask = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };
  const [line, setLine] = useState(false);

  const lineThrough = (event) => {
    event.style.textDecorationLine = 'line-through';
  };

  return (
    <>
      <div className="container row col-5 offset-3">
        <h1
          style={{
            marginLeft: '160px',
            color: 'purple',
            textDecorationLine: 'underline',
          }}
        >
          TODO APP
        </h1>

        <h3>Task Name</h3>
        <input
          type="text"
          name="task"
          value={state.task}
          onChange={changeHandler}
        />

        <h3 className="mt-3">Description</h3>
        <input
          type="text"
          name="description"
          value={state.description}
          onChange={changeHandler}
          className="from-control required"
        />

        <h3 className="mt-3">Enter submission date</h3>

        <input
          type="date"
          name="dueDate"
          value={state.dueDate}
          onChange={changeHandler}
        />
        <br />

        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={clickEvent}
        >
          Click To Add
        </button>
      </div>
      <div style={{ margin: '30px' }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Task</th>
              <th scope="col">Description</th>
              <th scope="col">DueDate</th>
              <th scope="col">Completed</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((ele, i) => {
              let dateEval = moment().diff(
                moment(ele.dueDate).format('YYYY-MM-DD'),
                'hours'
              );
              return (
                <tr
                  className="bg-info"
                  style={{ color: dateEval > 0 ? 'red' : 'green' }}
                >
                  <th scope="row">{i + 1}</th>
                  <td>{ele.task}</td>
                  <td>{ele.description}</td>
                  <td>{ele.dueDate}</td>
                  <td>
                    <input
                      className="form-check-input"
                      onClick={() => lineThrough(ele.task)}
                      type="checkbox"
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteTask(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todo;
