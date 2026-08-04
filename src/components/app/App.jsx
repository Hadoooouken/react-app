import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Leon S', salary: 800, increase: false, id: 1 },
        { name: 'Cris R', salary: 3000, increase: false, id: 2 },
        { name: 'Jill V', salary: 5000, increase: true, id: 3 },
      ],
    };

    this.maxId = this.state.data.length + 1;;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((elem) => elem.id !== id);

      return {
        data: newData,
      };
    });
  };

  addItem = (obj, e) => {
    e.preventDefault();
    const newEmploye = {
      ...obj,
      increase: true,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newData = [newEmploye, ...data];

      return {
        data: newData,
      };
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
