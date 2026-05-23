const PersonForm = ({ onSubmit, newName, onNameChange, newNumber, onNumberChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <br />
                <h3>add a new</h3>
                Name: <input value={newName} onChange={onNameChange} />
            </div>
            <div>
                Number: <input value={newNumber} onChange={onNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            <br />
        </form>
    )
}
export default PersonForm