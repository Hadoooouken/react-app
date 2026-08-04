import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: 0,
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;
    const { addItem } = this.props;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!name || !salary) {
              alert('заполните данные');
            } else {
              addItem(
                {
                  name: name,
                  salary: salary,
                },
              );
              this.setState({
                name: '',
                salary: 0,
              });
            }
          }}
          className="add-form d-flex"
        >
          <input
            onChange={this.onValueChange}
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
          />
          <input
            onChange={this.onValueChange}
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
