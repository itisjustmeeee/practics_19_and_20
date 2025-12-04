import './Statistics.css';

function Statistics({ technologies }) {
    const total = technologies.length;
    const completed = technologies.filter(t => t.status === 'completed').length;
    const inProgress = technologies.filter(t => t.status === 'in-progress').length;
    const notStarted = technologies.filter(t => t.status === 'not-started').length;

    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    const categoryCount = technologies.reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + 1;
        return acc;
    }, {});
    const topCategory = Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0]?.[0] || '-';

    return (
        <div className='statistics'>
            <div className='stat-item'>
                <span className='value'>{completed}</span>
                <span className='label'>Завершено</span>
            </div>
            <div className='stat-item'>
                <span className='value'>{inProgress}</span>
                <span className='label'>В процессе</span>
            </div>
            <div className='stat-item'>
                <span className='value'>{notStarted}</span>
                <span className='label'>Не начато</span>
            </div>
            <div className='progress-bar'>
                <div
                className='progress-fill'
                style={{width: `${percent}%`, background: `linear-gradient(90deg, #fca5a5, #60a5fa, #4ade80)`}} />
                <span className='percent'>{percent}% завершено</span>
            </div>
            <p className='top-category'>Топ категория: <strong>{topCategory}</strong></p>
        </div>
    );
}

export default Statistics;