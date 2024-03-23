# Auth Sample with Eliysia

## Development

Install Bun:

```sh
curl -fsSL https://bun.sh/install | bash
```

Start the Remix development asset server and the Express server by running:

```sh
bun run dev
```

## Deployment

First, build your app for production:

```sh
bun run build
```

Then run the app in production mode:

```sh
bun start
```

Now you'll need to pick a host to deploy it to.

---

| 内容                   | npm        | bun         |
| ---------------------- | ---------- | ----------- |
| 依存関係のインストール | npm i      | bun i       |
| Lintの実行             | npx eslint | bunx eslint |

> [!TIP]
> Test the POST request from the terminal.
>
> `curl -X POST -d "email=student%2B111444@gmail.jpn&password=password" localhost:36666/student/login`
