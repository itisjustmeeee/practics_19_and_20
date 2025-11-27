function TechnologyCard() {
    const technologies = [
        { id: 1, title: 'JSX и React', description: 'Изучение работы JSX и React уомпонентов для контррольной работы', status: 'in-progress', icon: '(─‿‿─)'},
        { id: 2, title: 'SQL', description: 'Изучение функций SQL к контрольной работе', status: 'completed', icon: '(¯▿¯)'},
        { id: 3, title: 'C#', description: 'Изучение базовых функций c# к контрольной работе', status: 'not-started', icon: '(>⩊<)'},
        { id: 4, title: 'Python', description: 'Изучение языка python для решения задач по ИИ и базам данных', status: 'in-progress', icon: '<(￣︶￣)>'}
    ];

    return (
        <div className="technology-card">
            <h2>Списочек задачек на попозже</h2>
            <ul>
                {technologies.map(technologie => (
                    <li 
                      key={technologie.id}
                      className={`status ${{"completed": "completed", "in-progress": "in-progress", "not-started": "not-started"}[technologie.status] || "unknown"}`}
                    >
                        <h2>{technologie.title}</h2>
                        <p>{technologie.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TechnologyCard;