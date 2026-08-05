import './app-filter.css';

const AppFilter = ({ onFilterSelect, filter }) => {
  const buttonsArr = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'increase', label: 'На повышение' },
    { name: 'salary', label: 'З/П больше 1000$' },
  ];
  
  const buttons = buttonsArr.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        key={name}
        onClick={() => onFilterSelect(name)}
        type="button"
        className={`btn ${clazz}`}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
