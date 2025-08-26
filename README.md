# Spotlight

Spotlight is a [Tailwind Plus](https://tailwindcss.com/plus) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, create a `.env.local` file in the root of your project and set the `NEXT_PUBLIC_SITE_URL` variable to your site's public URL:

```
NEXT_PUBLIC_SITE_URL=https://example.com
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation


## Next.js – dev, production, and PM2

### 🔧 Development (local)
Start the hot-reload dev server:

```bash
npm run dev
```

### 🚀 Production (without PM2)
Build and run the production server:
```bash
    npm run build
    npm start
```

### ⚙️ PM2 (manage the production server)
Install PM2 (once per machine):
```bash
    npm i -g pm2
```

Start the app under PM2:
```bash
    pm2 start npm --name "findingsimple" -- start
    # with explicit port/host if needed:
    # pm2 start npm --name "findingsimple" -- start -- -p 3000 -H 0.0.0.0
```

Graceful reload after updates (no downtime):
```bash
    pm2 reload findingsimple
```

Hard restart:
```bash
    pm2 restart findingsimple
```

View logs / status:
```bash
    pm2 logs findingsimple
    pm2 status
    pm2 list
```

Stop or remove from PM2:
```bash
    pm2 stop findingsimple
    pm2 delete findingsimple
```

### 🧰 Boot persistence (auto-start on reboot)

Generate the systemd service and save the process list:
```bash
    pm2 startup systemd -u $USER --hp $HOME
    pm2 save
```

### 🔄 Typical update flow
```bash
    git pull
    npm ci            # or: npm install
    npm run build
    pm2 reload findingsimple
```
