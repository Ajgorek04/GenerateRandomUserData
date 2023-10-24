export function List({ selectedOptions, generatedData }) {
    const data = generatedData.results[0];
    console.log(data);

    return (
        <>
            <hr />
            <ul className="listOfUsers">
                {selectedOptions.map((option, index) => (
                    <li key={index}>
                        <div>
                            <strong> {option} </strong>
                            <p> {getFieldName(option, data)} </p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

function getFieldName(fieldName, data) {
    switch (fieldName) {
        case "ID":
            return data.login.uuid;
        case "Login":
            return data.login.username;
        case "Email":
            return data.email;
        case "Gender":
            return data.gender;
        case "Name":
            return `${data.name.first} ${data.name.last}`;
        case "Phone":
            return data.phone;
        case "Date of Birth":
            return data.dob.date;
        case "Location":
            return `${data.location.city}, ${data.location.state}, ${data.location.country}`;
        case "Registration Date":
            return data.registered.date;
        case "Picture":
            return (
                <img className="" src={data.picture.large} alt="User Picture" />
            );
        default:
            return "";
    }
}
