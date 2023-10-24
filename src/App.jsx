import "./App.css";
import { Checked } from "../components/Checked";
import { Generate } from "../components/Generate";

function App() {
    return (
        <div className="container">
            <header>
                <h1>Generate Random User Data</h1>
            </header>
            <img
                src="./src/assets/userIcon.png"
                alt="img"
                className="userPNG"
            />
            <p className="pText">Choose what data you want to generate</p>
            <Checked />
            <Generate />
        </div>
    );
}

export default App;
