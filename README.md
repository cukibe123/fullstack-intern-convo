This is a small fullstack assignment for the recruitment stage at Convo[https://getconvo.ai/]. Convo is an AI voice interviewing platform that generates insights from user interviews. Product teams review interview responses, summaries, and insights through a dashboard.

## Quick Start

For both the frontend and backend, you can redirect to these folders and first run ```npm install```. This step helps us to install all necessary dependencies for the project. When the installation is done, both ends can be started by the command ```npm run dev```. Although they are executed under development, it is enough for the scope of this assignment.

The server should run first so it can take over the port 3000. The frontend is going to take over the port 3001 as the 3000 is taken by the server. The reason is that I hardcode the address for the api call. As soon as both ends are on, you can immediately start experiencing the design of the frontend.

## Assignment Structure

The project is divided into two folders, one for the backend, and one for the frontend. The frontend is written using Next.js, while the backend is written using Node.js (Express).

```
Fullstack-intern-convo/
├── backend/
│   ├── data/                          # Local data / mock storage
│   ├── src/
│   │   ├── routes/                    
│   │   │   └── responses.routes.ts    # Interview responses endpoints
│   │   │
│   │   ├── services/                 
│   │   │   └── responses.service.ts   # Interview responses service logic
│   │   │
│   │   ├── types/
│   │   │   └── interviewResponse.ts   # Interview response type definitions
│   │   │
│   │   ├── app.ts                     # Express app configuration
│   │   │
│   │   └── server.ts                  # Server entry point
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/                           
│   │   ├── app/                      
│   │   │   └── page.tsx               # Main page
│   │   │
│   │   ├── components/                # Reusable UI components
│   │   │   ├── ResponseFilters.tsx
│   │   │   ├── ResponseList.tsx
│   │   │   └── ResponseStatsPanel.tsx
│   │   │
│   │   ├── libs/                      # Shared utilities
│   │   │   └── api/                   # API client logic
│   │   │
│   │   └── types/                     
│   ├── eslint.config.mjs
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.mjs
│   └── tsconfig.json
├── .env                               # Environment variables
├── .gitignore
└── README.md
```

## What are built in this assignment
This assignment requires participants to build a small full-stack feature that displays interview insights and support basic interaction. Therefore, the assignment is seperated into two parts, frontend and backend.

### Frontend

The frontend is built with **Next.js** and provides a simple user interface for exploring interview responses. Users can apply basic filters based on **sentiment** and **theme**, and view lightweight visualizations. Below here is the list of features:
- Display a list of interview responses. All interview questions are fetched from the backend via a single call.
- Clearly indicate sentiment using color coding:
  - Green as Positive
  - Red as Negative
  - Blue as Neutral
- Filter responses by:
  - Sentiment (multiples can be selected)
  - Theme (mutiples can be selected)
- Display simple visualizations:
  - Overall response distribution by **sentiment**
  - Overall response distribution by **theme**
  - Filtered response distribution by **sentiment**
  - Filtered response distribution by **theme**

The main page is composed of three elements: the filter panel, the question list, and the distribution panel. The design and future development of the dashboard are more straightforward when we have a clear separation between components. 

### Backend

The backend is built with **Node.js** and provides a single API logic for retrieving all interview questions. Each interview questions have these properties:
- question
- response_text
- sentiment
- theme

Files are split into ```/routes``` and ```/services```. Although it is unnecessary to overengineer things, I believe this separation is necessary. It gives readers a quick grasp of the backend's layers, instead of putting everything in a single folder. 

The dataset is the CSV file and stored under the ```/data``` folder. The backend processes and extracted desired columns from the CSV file. Each row is converted into the custom type structure. Both frontend and backend use the same type structure to ensure clarity and consistency when we read and understand the code.

## What would you improve with more time
This assignment requires to be finished around 1.5-2 hours. Within 2 hours, I spent most of the time designing and brainstorming the UX of the frontend (around 1-1.5 hours to think, design and implement). In my point of view, there are many ways in how we can make the frontend more interactive and beautiful. There are several points that I would love to implement more if I have more time:
- Interactive pie/bar charts for the data distribution (This could have been done using libraries, but at the time, it was a bit of challenge for me to learn and get used to new libraries). The current design of the distribution panel looks too simple, not yet informative.
- Questions are displayed in sorted categories (easier for reading in the first place).
- Add more transitions when new categories are selected (Smoother transitions provides better experiences, currently the page looks rigid).
- Take responsive layout and mobile designs into account (It would be nice if we have this since it improves compatibility).

## Preview of the project

Overall []

When we filter sentiments []

When we filter themes []

When we filter both sentiments and themes []


