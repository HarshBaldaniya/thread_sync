# Theater Seat Booking System

This project demonstrates a theater seat booking system simulation using TypeScript and Node.js. It focuses on managing concurrency with mutexes and semaphores to handle multiple users attempting to book a limited number of seats simultaneously.

## Project Overview

In scenarios where multiple users attempt to book seats at the same time, managing these concurrent requests is crucial to prevent data inconsistencies such as overbooking. This simulation utilizes concurrency primitives like mutexes and semaphores to ensure that operations like seat booking and availability checking are handled correctly.

## Technology Stack

- **Node.js**: The runtime environment for executing the JavaScript code.
- **TypeScript**: Enhances JavaScript with types and is used for writing the source code of this simulation.
- **async-mutex**: A Node.js library providing mutexes to prevent race conditions.
- **async-sema**: A Node.js library that provides semaphores to limit the number of concurrent operations.

## Features

- **Mutex (Mutual Exclusion)**: Ensures that booking operations are atomic, thus preventing two users from booking the same seat simultaneously. The mutex in our project is used in the `bookSeat` method to lock the seat booking process. When one user is booking a seat, others are prevented from doing the same until the booking is complete, effectively managing access to the shared resource (seats).
- **Semaphore**: Limits the number of users that can check seat availability at the same time to prevent excessive load on the system. In our application, the semaphore is configured to allow up to three concurrent seat checks, demonstrating how to control load on resources that can handle limited concurrent access.

## How Mutexes and Semaphores Work

### Mutex

A mutex is a synchronization primitive that grants exclusive access to a resource or a critical section. It is essential in preventing race conditions, where two or more processes modify shared data at the same time. In our simulation, the mutex ensures that when a seat is being booked, no other process can book seats until the booking operation completes, thereby preventing overbooking.

### Semaphore

A semaphore restricts the number of simultaneous users of a particular resource. Unlike a mutex, which only allows one thread to access a resource at a time, a semaphore can allow multiple threads to access a resource but limits their number. This is useful in our simulation for managing how many users can perform seat checks simultaneously, thereby limiting the burden on the booking system's resources.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js installed on your computer to run this project. Download and install it from [nodejs.org](https://nodejs.org/).

### Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/HarshBaldaniya/thread_sync.git
cd thread_sync
