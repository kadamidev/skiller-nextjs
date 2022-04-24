# Skiller

A productivity app(glorified note taking app) made using Javascript/NextJS/React/Sass for the frontend and NextAPI/Prisma 2 ORM, Postgresql for the backend.

<a href="https://skiller-nextjs.herokuapp.com/">![Demo](https://img.shields.io/badge/-Live_Demo-4E4E4E?style=for-the-badge&logo=heroku)
</a>

## Functionality

- Responsive across Mobile/web/tablets
- Landing page
- Create multiple tabs
- Create lists within tabs
- Guest Mode (local persistence)
- Progress Bars for lists
- Settings to configure darkmode, display options
- Auth/Sign in option for persistence across devices

## Considerations/Things I would of done differently

- In hindsight I should of used a data fetching solution like react-query or useSWR to handle fetching/caching and updating data, for learnings sake I reinvented the wheel and while authed this can sometimes lead to bugs if actions are taken too quickly and the local/db ids become out of sync, these libraries handle those edgecases wholey.
- I should of used redux for state management in this project from the start, instead I started with regular react state hooks, then changed to reacts reducer hook later on, redux would've been optimal in this project.
