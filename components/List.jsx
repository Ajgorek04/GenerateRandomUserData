export function List({ selectedOptions }) {
    return (
        <ul className="listOfUsers">
            {selectedOptions.map((option, index) => (
                <li key={index}>{option}</li>
            ))}
        </ul>
    );
}
