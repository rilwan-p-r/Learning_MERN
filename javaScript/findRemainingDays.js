function getBalanceDays() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1

    // Get the last day of the month
    const lastDayOfMonth = new Date(year, month, 0).getDate();

    // Get the current day of the month
    const currentDayOfMonth = currentDate.getDate();

    // Calculate the balance days
    const balanceDays = lastDayOfMonth - currentDayOfMonth;

    return balanceDays;
}

// Example usage
const balanceDays = getBalanceDays();
console.log("Balance days in the current month:", balanceDays);
