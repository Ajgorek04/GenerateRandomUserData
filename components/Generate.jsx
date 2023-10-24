import { useState } from "react";

export function Generate({
    selectedOptions,
    handleShowList,
    setShowSelectedCheckbox,
}) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleGenerateClick = () => {
        if (quantity > 10) {
            alert("Max Value is 10");
            setQuantity(10);
        } else {
            console.log(quantity);
            console.log(selectedOptions);
            handleShowList();
            setShowSelectedCheckbox(false);
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
