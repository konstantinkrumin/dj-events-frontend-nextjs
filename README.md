# DJ Events [Next.JS + Strapi CMS Project]

This is a platform that allows you to make posts about DJ Events. You can register / login and perform CRUD operations on the events that were created by you. Frontend is created using Next.JS and deployed on Vercel, and backend is on Strapi CMS and deployed on Heroku.

Stack: **Javascript**, **React**, **Next.JS**, **Strapi CMS**

[Check It Out Here](https://dj-events-frontend-nextjs.vercel.app/)

Alternatively, you can start it locally by getting the following repositories:

- [Frontend Repo](https://github.com/konstantinkrumin/dj-events-frontend-nextjs)
- [Backend Repo](https://github.com/konstantinkrumin/dj-events-backend-strapi)

1. In the backend directory you need to create `.env` file in the root directory and add your credentials for Cloudinary account and default `host` and `port` there:

```bash
    CLOUDINARY_NAME=*****
    CLOUDINARY_KEY=*****
    CLOUDINARY_SECRET=*****
    HOST=0.0.0.0
    PORT=1337
```

2. In the frontend directory if you want to show map with event location you will need to add the following keys to the `.env.local` (in the root directory) for you Mapbox and Google Cloud Platform accounts (as well as uncomment `EventMap` component in the `[slug].js` file). Also add `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_FRONTEND_URL` with URLs of your backend and frontend (only needed for deployment, locally backend will run on `localhost:1337` and frontend on `localhost:3000`:

```bash
    NEXT_PUBLIC_MAPBOX_API_TOKEN=*****
    NEXT_PUBLIC_GOOGLE_MAP_API_KEY=*****
    NEXT_PUBLIC_API_URL=*****
```

    And navigating to ```localhost:3000```. You should see your app running.

3. Start backend server with:

```bash
    npm run develop
```

4. Start frontend server with:

```bash
    npm run dev
```

P.S. You will need to install the dependencies in both repos if you haven't previously done it:

```bash
    npm install
```

_Main Page:_

![App Image 1](https://i.imgur.com/gL9T92N.png)

_Dashboard Page:_

![App Image 2](https://i.imgur.com/EKILkrj.png)

_Add New Event Page:_

![App Image 2](https://i.imgur.com/rH2mmj5.png)
