const Filter = ({ persons, onFilterChange, filter }) => {
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <div>
                filter shown with <input value={filter} onChange={onFilterChange} />
            </div>
            <br />
            {filteredPersons.map(person => (<p key={person.id}>
                {person.name} {person.number}
            </p>
            ))}
        </div>
    )
}

export default Filter