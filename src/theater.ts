import { Mutex } from 'async-mutex';

class Theater {
    private seats: number;
    private mutex: Mutex;

    constructor(seats: number) {
        this.seats = seats;
        this.mutex = new Mutex(); // Mutex for exclusive access to booking
    }

    async bookSeat(user: string): Promise<string> {
        const release = await this.mutex.acquire();
        try {
            if (this.seats > 0) {
                this.seats--;
                console.log(`Booking: User ${user} just booked. Seats left: ${this.seats}`);
                return `${user} booked a seat. Seats left: ${this.seats}`;
            } else {
                console.log(`Booking: User ${user} attempted to book but no seats are left.`);
                return `${user} could not book a seat. No more seats available.`;
            }
        } finally {
            release();
        }
    }
}

export { Theater };
