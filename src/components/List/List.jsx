import styles from "./List.module.css";

export function List({ selectedOptions, generatedData }) {
    const users = [];

    for (let i = 0; i < generatedData.length; i++) {
        const data = generatedData[i].results[0];
        const user = (
            <li key={`user${i}`}>
                <hr />
                <p className={styles.user}> User {i + 1}</p>

                {selectedOptions.map((option, index) => (
                    <div key={index}>
                        <strong> {option} </strong>
                        <p> {getFieldName(option, data)} </p>
                    </div>
                ))}
            </li>
        );

        users.push(user);
    }

    return (
        <ul className={styles.listOfUsers}>
            {users}
            <hr />
        </ul>
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
            return <img src={data.picture.large} alt="User Picture" />;
        default:
            return "";
    }
}
