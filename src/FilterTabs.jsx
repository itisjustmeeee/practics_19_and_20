import './FilterTabs.css';

const filters = [
    {id: 'all', label: 'Все'},
    {id: 'not-started', label: 'Не начато'},
    {id: 'in-progress', label: 'В процессе'},
    {id: 'completed', label: 'Завершено'},
];

function FilterTabs({currentFilter, onFilterChange}) {
    return (
        <div className='filter-tabs'>
            {filters.map(f => (
                <button key={f.id} className={`filter-btn ${currentFilter === f.id ? 'active' : ''}`}
                onClick={() => onFilterChange(f.id)}>
                    <span className='filter-icon'>{f.icon}</span>
                    {f.label}
                </button>
            ))}
        </div>
    );
}

export default FilterTabs;