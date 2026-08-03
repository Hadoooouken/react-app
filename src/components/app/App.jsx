import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './App.css';

function App() {
  const data = [
    { name: 'Leon S', salary: 800, increase: false, id: 1 },
    { name: 'Cris R', salary: 3000, increase: false, id: 2 },
    { name: 'Jill V', salary: 5000, increase: true, id: 3 },
  ];
  return (
    <div className="App">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
