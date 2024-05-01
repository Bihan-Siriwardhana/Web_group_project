// Sample data: Account balances
const accounts = {
    user1: 1000,
    user2: 2000,
};

// Function to transfer money between accounts
function transferMoney(sender, receiver, amount) {
    if (accounts[sender] >= amount) {
        accounts[sender] -= amount;
        accounts[receiver] += amount;
        console.log(`Transferred $${amount} from ${sender} to ${receiver}.`);
    } else {
        console.log(`Insufficient balance in ${sender}'s account.`);
    }
}

// Example usage
transferMoney('user1', 'user2', 300); // Transfers $300 from user1 to user2
console.log(accounts); // Updated account balances
