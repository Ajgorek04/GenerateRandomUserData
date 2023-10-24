export function List({ selectedOptions, generatedData }) {
    const data = generatedData.results[0];
    console.log(data);

    return (
        <ul className="listOfUsers">
            {selectedOptions.map((option, index) => (
                <li key={index}>{option}</li>
            ))}
        </ul>
    );
}
