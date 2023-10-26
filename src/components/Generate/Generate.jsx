import styles from "./Generate.module.css";
import { useState } from "react";

export function Generate({
    handleShowList,
    setShowSelectedCheckbox,
    setGeneratedData,
}) {
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const [showContent, setShowContent] = useState(true);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        setQuantity(value);
    };

    const handleGenerateClick = async () => {
        if (loading) {
            return;
        }

        if (quantity > 10) {
            alert("Max Value is 10");
            setQuantity(10);
        } else if (isNaN(quantity) || quantity === 0) {
            alert("Please enter a valid value");
        } else {
            try {
                setLoading(true);
                setShowContent(false);
                setShowSelectedCheckbox(false);

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
            } catch (error) {
                console.error("Error: ", error);
            } finally {
                setLoading(false);
                setShowContent(true);
                handleShowList();
                setShowSelectedCheckbox(true);
            }
        }
    };

    return (
        <div className={styles.generate}>
            {showContent ? (
                <>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                    <button onClick={handleGenerateClick}>Generate</button>
                </>
            ) : (
                <h2>Generating...</h2>
            )}
        </div>
    );
}
