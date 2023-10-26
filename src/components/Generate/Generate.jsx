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
                setShowSelectedCheckbox(false);
                setLoading(true);
                setShowContent(false);

                const requests = [];
                for (let i = 0; i < quantity; i++) {
                    requests.push(fetch(`https://randomuser.me/api/`));
                }

                const responses = await Promise.all(requests);
                const generatedData = await Promise.all(
                    responses.map((response) => response.json())
                );

                setGeneratedData(generatedData);
                handleShowList();
            } catch (error) {
                console.error("Error: ", error);
            } finally {
                setLoading(false);
                setShowContent(true);
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
