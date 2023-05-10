# QrGenerator

## Description

The QR Generator is a web application built using the ReactJS library. It provides users with the ability to generate QR codes for a wide range of purposes. With a user-friendly interface, the application allows users to quickly create QR codes by entering relevant information or selecting from predefined options. Whether it's for sharing URLs, contact information, or any other data, the QR Generator simplifies the process and provides high-quality QR codes. Give it a try and easily generate QR codes for your needs.

## Installation

1. Download and extract the contents of the zip file to a directory of your choice.
2. Open a terminal or command prompt and navigate to the project directory using the `cd` command: `cd qrgenerator`
3. Install dependencies: `npm install`

## Dependencies

- React: 18.2.0
- React DOM: 18.2.0
- React Scripts: 5.0.1

## Dev Dependencies

- Babel Runtime: 7.13.8
- TypeScript: 4.1.3
- Jest: ^27.5.1
- Testing Library/Jest DOM: "^5.16.5"
- Testing Library/React: "^14.0.0"

## Environment Variables

The following environment variables are required to configure the application:

- `BASE_URL`: The base URL of the application.

### Setting up Environment Variables

1. Rename the `.env.example` file to `.env`.
2. Open the `.env` file and replace the placeholder values with the actual values for each variable.
3. Set the `BASE_URL` variable to the root URL of your application.

**Note:** Make sure to keep the `.env` file secure and do not commit it to version control.

## Scripts

- **npm start**: Starts the development server.
- **npm build**: Builds the production-ready version of the app.

