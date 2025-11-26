function TechnologyCard() {
    const technologies = [
        { id: 1, title: 'JSX и React', description: 'Изучение работы JSX и React уомпонентов для контррольной работы', status: 'in-prorgress' },
        { id: 2, title: 'SQL', description: 'Изучение функций SQL к контрольной работе', status: 'completed'},
        { id: 3, title: 'О#', description: 'Изучение базовых функций c# к контрольной работе', status: 'not-started'},
        { id: 4, title: 'Python', description: 'Изучение языка python для решения задач по ИИ и базам данных', status: 'in-prorgress'}
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
                        <span>{technologie.title}</span>
                        <p>{technologie.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TechnologyCard;