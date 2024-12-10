document.addEventListener("DOMContentLoaded", () => {
    // Add event listener for the "Calculate Tax" button
    document.getElementById("calculateTax").addEventListener("click", () => {
        // Get the income value from the input field
        const income = parseFloat(document.getElementById("userNumber").value);
        let tax = 0;

        if (!income || income <= 0) {
            alert("Please enter a valid income amount.");
            return;
        }

        // Calculate tax based on income slabs
        if (income <= 250000) {
            tax = 0;
        } else if (income <= 400000) {
            tax = (income - 250000) * 0.20;
        } else if (income <= 800000) {
            tax = 30000 + (income - 400000) * 0.25;
        } else if (income <= 2000000) {
            tax = 130000 + (income - 800000) * 0.30;
        } else if (income <= 8000000) {
            tax = 490000 + (income - 2000000) * 0.32;
        } else {
            tax = 2410000 + (income - 8000000) * 0.35;
        }

        // Display the calculated tax in the read-only input field
        document.getElementById("taxedIncome").value = tax.toFixed(2);
    });
});
