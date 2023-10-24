export function Checked() {
    const options = [
        "ID",
        "Login",
        "Email",
        "Gender",
        "Name",
        "Phone",
        "Date of Birth",
        "Location",
        "Registration Date",
        "Picture",
    ];

    return (
        <div className="options">
            {options.map((option, index) => (
                <div key={index} className="inpLab">
                    <input
                        type="checkbox"
                        key={index}
                        name={option}
                        defaultChecked={true}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    );
}
