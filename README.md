# Theater Seat Booking System

This project demonstrates a theater seat booking system simulation using TypeScript and Node.js. It focuses on managing concurrency with mutexes and semaphores to handle multiple users attempting to book a limited number of seats simultaneously.

## Project Overview

In a real-world scenario where multiple users try to book seats at the same time, it is crucial to manage these concurrent requests to prevent data inconsistencies like overbooking. This simulation uses concurrency primitives such as mutexes and semaphores to ensure that seat booking and availability checks are handled correctly.

## Technology Stack

- **Node.js**: The runtime environment for executing the JavaScript code.
- **TypeScript**: Enhances JavaScript with types and is used for writing the source code of this simulation.
- **async-mutex**: A Node.js library providing mutexes to prevent race conditions by ensuring that only one operation can access the critical section of the code at any one time.
- **async-sema**: A Node.js library that provides semaphores to limit the number of concurrent operations, useful for managing how many users can check seat availability at once.

## Features

- **Mutex**: Ensures that booking operations are atomic, thus preventing two users from booking the same seat simultaneously.
- **Semaphore**: Limits the number of users that can check seat availability at the same time, preventing excessive strain on system resources.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js installed on your computer to run this project. Download and install it from [nodejs.org](https://nodejs.org/).

### Installation

Clone this repository to your local machine:

```bash
git clone https://your-repository-url.git
cd theater-seat-booking-system
