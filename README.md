# SlidelyAI Backend

This repository contains the backend for the SlidelyAI Form App. The backend is responsible for managing submissions and providing API endpoints for the frontend application.

## Screenshots
### Home Screen
![Create Submission Form](screenshots/home_screen.png)

### Create Submission Form
![Create Submission Form](screenshots/create_submission_form.png)

### View Submissions Form
![View Submissions Form](screenshots/view_submissions_form.png)


## Frontend Link: [SlidelyAI Frontend Github]( https://github.com/GarvonGit/-Garv-Chouhan-SlidelyAI-DesktopApp.git).

## Features

- Handle form submission 
- Retrieve submissions
- Delete submissions

## Prerequisites

- [.NET Framework](https://dotnet.microsoft.com/download) (version 4.7.2 or higher)
- [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) (JSON.NET library for .NET)

## Installation

### Step 1: Clone the Repository

- git clone https://github.com/GarvonGit/-Garv-Chouhan-SlidelyAI-Backend.git
- cd -Garv-Chouhan-SlidelyAI-Backend

### Step 2: Open the Project
Open the project in Visual Studio.

### Step 3: Install NuGet Packages
- Install-Package Newtonsoft.Json

### Step 4: Run the Project
Build and run the project in Visual Studio. The backend should start and be ready to accept requests.

## API Endpoints

### Create Submission
1. URL: /api/submit
2. Method: POST
3. Body: JSON object containing submission details
   
### Retrieve Submissions
1. URL: /api/submissions
2. Method: GET

### Delete Submission
1. URL: /api/submissions/{id}
2. Method: DELETE

## License
This project is licensed under the MIT License. See the LICENSE file for details.
