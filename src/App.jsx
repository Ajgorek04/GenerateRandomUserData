import "./App.css";
import userIcon from "./assets/userIcon.png";
import { useState } from "react";
import { Checked } from "./components/Checked/Checked";
import { Generate } from "./components/Generate/Generate";
import { List } from "./components/List/List";

function App() {
    const [selectedOptions, setSelectedOptions] = useState([
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
    ]);

    const [showList, setShowList] = useState(false);
    const [showSelectedCheckbox, setShowSelectedCheckbox] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const [generatedData, setGeneratedData] = useState(null);

    const handleShowList = () => {
        setShowList(true);
        setShowSelectedCheckbox(false);
    };

    return (
        <div className="container">
            <header>
                <h1>Generate Random User Data</h1>
            </header>
            <img src={userIcon} alt="img" className="userPNG" />
            <p className="pText">Choose what data you want to generate</p>
            {showSelectedCheckbox && (
                <Checked
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                />
            )}

            <Generate
                handleShowList={handleShowList}
                showSelectedCheckbox={showSelectedCheckbox}
                setShowSelectedCheckbox={setShowSelectedCheckbox}
                setGeneratedData={setGeneratedData}
                generatedData={generatedData}
                setQuantity={setQuantity}
            />
            {showList && generatedData && (
                <List
                    selectedOptions={selectedOptions}
                    generatedData={generatedData}
                    quantity={quantity}
                />
            )}
        </div>
    );
}

export default App;
