# AI-Powered Apps

A full-stack application developed as part of [Mosh Hamedani's course on building AI-powered apps](https://codewithmosh.com/p/build-ai-powered-apps). This project demonstrates the integration of Large Language Models (LLMs) with modern web technologies to create practical AI features.

## Features

- **Chatbot**: An interactive chatbot designed for an imaginary theme park, providing instant answers to visitor queries such as ride recommendations for kids, food options, and park hours. Built with a clean architecture backend and a responsive frontend.

- **Review Summarizer**: A tool that analyzes and condenses customer reviews into concise, actionable insights, helping users make informed decisions quickly.

## Technologies Used

- Bun (runtime and package manager)
- Tailwind CSS (styling)
- shadcn/ui (UI components)
- Prisma (database ORM)
- Hugging Face and Ollama (for integrating open-source LLMs)
- Prompt engineering techniques for effective AI interactions

## Installation

To install dependencies:

```bash
bun install
```

## Database Setup

This project uses MySQL as the database and Prisma as the ORM.

1. Ensure you have MySQL installed and running on your local machine. You can download it from [MySQL official website](https://dev.mysql.com/downloads/mysql/).

2. Create a database named `review_summarizer` (or update the database name in the connection URL as needed).

3. Copy the example environment file and configure the database URL:

    ```bash
    cd packages/server
    cp .env.example .env
    ```

    Edit `.env` to match your MySQL setup. The default configuration is:

    ```
    DATABASE_URL=mysql://root:password@localhost:3306/review_summarizer
    ```

    Replace `root`, `password`, `localhost`, and `3306` with your actual MySQL credentials and host/port if different.

4. Run the Prisma migrations to set up the database schema:

    ```bash
    cd packages/server
    bunx prisma migrate dev
    ```

5. Generate the Prisma client:
    ```bash
    bunx prisma generate
    ```

## Running the Application

To run the application (both client and server concurrently):

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.21. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
