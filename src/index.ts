import { Theater } from "./theater";
import { sleep } from "./utils";

async function main() {
    const theater = new Theater(5); // Initialize the theater with 5 seats
    console.log("Initial total seats available: 5");

    // Function to handle concurrent booking attempts for a group of users
    async function attemptBooking(users: any[]) {
        console.log(`\nAttempting concurrent bookings by: ${users.join(", ")}`);
        const bookingPromises = users.map((user: string) => theater.bookSeat(user));

        // Execute all booking attempts simultaneously
        const results = await Promise.all(bookingPromises);
        results.forEach(result => console.log(result));
    }

    // Groups of users trying to book at different times
    const group1 = ["Harsh", "Tirth", "Manav"]; // First group
    const group2 = ["Ridham"]; // Second group
    const group3 = ["Krupa", "Aman", "Vivek", "Priya", "Neha"]; // Third group (5 users, but may not all succeed)

    // First group tries to book
    await attemptBooking(group1);

    // Random delay to simulate different booking times
    await sleep(2000);

    // Second group tries to book
    await attemptBooking(group2);

    // Random delay before the third group
    await sleep(2000);

    // Third group tries to book
    await attemptBooking(group3);
}

main();
