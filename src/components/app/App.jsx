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
        { name: 'Leon S', salary: 800, increase: false, rise: true, id: 1 },
        { name: 'Cris R', salary: 3000, increase: false, rise: false, id: 2 },
        { name: 'Jill V', salary: 5000, increase: true, rise: false, id: 3 },
      ],
    };

    this.maxId = this.state.data.length + 1;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((elem) => elem.id !== id);

      return {
        data: newData,
      };
    });
  };

  addItem = (obj) => {
    const newEmploye = {
      ...obj,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newData = [newEmploye, ...data];

      return {
        data: newData,
      };
    });
  };

  // onToggleIncrease =(id) => {
  //   this.setState(({ data }) => {
  //     // const index = data.findIndex((elem) => elem.id === id);
  //     // const old = data[index];
  //     // const newItem = { ...old, increase: !old.increase };
  //     // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
  //     // console.log(newArr);
  //     // return {
  //     //   data: newArr,
  //     // };
  //   });
  // }
  // onToggleIncrease = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  // onToggleRice = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  render() {
    const { data } = this.state;
    const employeeCount = data.length;
    const increaseEmployee = data.filter((employee) => employee.increase).length;
    return (
      <div className="App">
        <AppInfo employees={employeeCount} increased={increaseEmployee} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={data} onDelete={this.deleteItem} onToggleProp={this.onToggleProp} />
        <EmployeesAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
