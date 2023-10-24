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
                const response = await fetch(`https://randomuser.me/api/`);
                if (response.ok) {
                    const data = await response.json();
                    setGeneratedData(data);
                    handleShowList();
                    setShowSelectedCheckbox(false);
                } else {
                    console.error("Error with API");
                }
            } catch (error) {
                console.error("Error: ", error);
            }
        }
    };

    return (
        <div className="generate">
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
