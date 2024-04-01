Asana/Board: https://app.asana.com/0/1206692558656343/1206692578528751

TimeReport Management Web Application 🕒📝

Welcome to our TimeReport Management Web Application! This application is designed to streamline the process of managing and submitting time reports. Built using React for the frontend and Express for the backend, this application provides a user-friendly interface for managing time reports efficiently.



Features ✨

    User Authentication: Users can easily log in using their Notion account via Clerk authentication, ensuring secure access to the application.
    Time Report Management: Users can create and view time reports based on their projects and tasks.
    Submission: Once time reports are completed, users can submit them directly through the application.
    Dashboard: The dashboard provides an overview of pending and submitted time reports, along with project/task summaries.


Technologies Used 🛠️

    React: A JavaScript library for building user interfaces.
    Express: A web application framework for Node.js.
    Notion API: Used for storing and managing time report data.
    Clerk: Provides authentication services via Notion.
    Node.js: A JavaScript runtime for building scalable network applications.


Pages 📄
    
    Home.js: This is the home page of your application. It imports a service from clerk/GetUser/GetId and an image from elklogo.png. The page displays some text and images to the user.

    projects.js: This is the projects page of your application. It imports several services from the notion directory, including GetAllProjects, GetActiveProjects, GetUserProjects, and ProjectSummary. These services are likely used to fetch and display project-related data. The page also uses the Tabs component from @mui/joy to organize the content.

    timereports.js: This is the time reports page of your application. It imports several services from the notion directory, including GetUserTimeReports and GetTimereports, and a component ReportTime from Modals/TimeReportMD. These are likely used to fetch, display, and report time-related data. The page also uses the Tabs component from @mui/joy to organize the content.
    
    The saveToNotion function is a function in your codebase that is responsible for saving data to Notion.

    The postTimeReports.js file is a service or utility in the codebase that is responsible for posting time report data to a specific endpoint, probably an API.


https://github.com/FredrikHalvarsson/elkineers/assets/141586150/166e6dac-e1df-4b4f-a91f-e734fac7deef
