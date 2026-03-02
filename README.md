# Scaffold

This project serves as scaffolding for building web apps. It contains boilerplate required for simple web apps:

- Two layouts
- Authentication via Clerk
- Dark mode via next-themes

## Configuration

Create a file called .env:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

Edit global variables in package.json:

- name
- description
