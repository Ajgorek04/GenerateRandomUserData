import styles from "./Generate.module.css";
import { useState } from "react";

export function Generate({
    handleShowList,
    setShowSelectedCheckbox,
    setGeneratedData,
}) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleGenerateClick = async () => {
        if (quantity > 10) {
            alert("Max Value is 10");
            setQuantity(10);
        } else {
            try {
                const generatedData = [];
                for (let i = 0; i < quantity; i++) {
                    const response = await fetch(`https://randomuser.me/api/`);
                    if (response.ok) {
                        const data = await response.json();
                        generatedData.push(data);
                    } else {
                        console.error("Error with API");
                    }
                }
                setGeneratedData(generatedData);
                handleShowList();
                setShowSelectedCheckbox(false);
            } catch (error) {
                console.error("Error: ", error);
            }
        }
    };

    return (
        <div className={styles.generate}>
            <input
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={handleQuantityChange}
            />
            <button type="submit" onClick={handleGenerateClick}>
                Generate
            </button>
        </div>
    );
}
