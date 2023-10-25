import styles from "./Checked.module.css";

export function Checked({ selectedOptions, setSelectedOptions }) {
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

    const handleCheckboxChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(
                selectedOptions.filter((item) => item != option)
            );
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <div className={styles.options}>
            {options.map((option, index) => (
                <div key={index} className="inpLab">
                    <input
                        type="checkbox"
                        key={index}
                        name={option}
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    );
}
