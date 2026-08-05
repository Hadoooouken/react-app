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
      term: '',
      filter: 'all',
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
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          console.log(item);

          if (item.id === id) {
            return { ...item, [prop]: !item[prop] };
          }
          return item;
        }),
      };
    });
  };

  searchEmployee = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.includes(term);
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  filterEmployees = (items, filter) => {
    if (filter === 'all') {
      return items;
    }
    if (filter === 'increase') {
      return items.filter((item) => item.increase);
    }
    if (filter === 'salary') {
      return items.filter((item) => {
        return +item.salary > 1000;
      });
    }
  };

  onUpdateSalary = (id, salary) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, salary: +salary };
        }
        return item;
      }),
    }));
  };

  render() {
    const { data, term, filter } = this.state;
    const employeeCount = data.length;
    const increaseEmployee = data.filter((employee) => employee.increase).length;
    const searcheData = this.searchEmployee(data, term);
    const visibleData = this.filterEmployees(searcheData, filter);
    return (
      <div className="App">
        <AppInfo employees={employeeCount} increased={increaseEmployee} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onFilterSelect={this.onFilterSelect} filter={this.state.filter} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onUpdateSalary={this.onUpdateSalary}
        />
        <EmployeesAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
