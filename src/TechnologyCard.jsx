function TechnologyCard() {
    const technologies = [
        { id: 1, title: 'JSX и React', description: 'Изучение работы JSX и React уомпонентов для контррольной работы', status: 'in-progress', icon: '(─‿‿─)'},
        { id: 2, title: 'SQL', description: 'Изучение функций SQL к контрольной работе', status: 'completed', icon: '(¯▿¯)'},
        { id: 3, title: 'C#', description: 'Изучение базовых функций c# к контрольной работе', status: 'not-started', icon: '(>⩊<)'},
        { id: 4, title: 'Python', description: 'Изучение языка python для решения задач по ИИ и базам данных', status: 'in-progress', icon: '<(￣︶￣)>'}
    ];

    const statusClass = {
        "completed": "completed",
        "in-progress": "in-progress",
        "not-started": "not-started"
    };

    return (
        <div className="technology-card">
            <h2>Списочек задачек на попозже</h2>
            <ul className="tech-list">
                {technologies.map(technologie => (
                    <li 
                      key={technologie.id}
                      className={`tech-item ${statusClass[technologie.status] || "unknown"}`}
                    >
                        <div className="tech-header">
                            <h3 className="icon">
                                {technologie.icon}{technologie.title}
                            </h3>
                            <span className="status-label">
                                {technologie.status === "completed" && "DONE"}
                                {technologie.status === "in-progress" && "LOADING"}
                                {technologie.status === "not-started" && "NOT DONE"}
                            </span>
                        </div>
                        <p className="tech-description">
                            {technologie.description}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TechnologyCard;