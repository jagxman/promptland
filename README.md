

Promptland is an open-source AI prompting tool for the modern world to discover, create, and share creative prompts.

![image](https://github.com/jagxman/promptland/assets/33289432/e18396b0-7a52-4c09-b5cb-b6f2437ecf4d)

## Features

- Sign in using Google Authentication
- Create and edit your prompts via the application.
- Search what others have shared and copy their prompts with a simple click.
- Increase productivity by viewing prompts with tags.
- View profiles of other users and see their creative prompts.

## Tech

Promptland is a full stack application built using various technologies.

- Next JS 13.4
- Tailwind CSS
- MongoDB
- NextAuth
- Google Auth


## Installation


Install the dependencies and start the server.

```sh
npm install
npm run dev
```

## ENV Variables

Google Client and MongoDB variables are needed to run this application.

| ENV | VALUE |
| ------ | ------ |
| GOOGLE_ID |Client ID for Web application |
| GOOGLE_CLIENT_SECRET | Client Secret for Web application |
| MONGODB_URI | MONGODB URI |
| NEXTAUTH_URL | http://localhost:3000 |
| NEXTAUTH_URL_INTERNAL | http://localhost:3000 |
| NEXTAUTH_SECRET |  openssl rand -base64 32 |


## Authorized JavaScript origins & redirect URIs
- http://localhost:3000
- http://localhost:3000/api/auth/callback/google




## License
MIT

