# Secret Games Wiki

A tiny, community-driven wiki of fun Google/"secret" games and Easter eggs.

## Website

Live site: https://frenchcast1234.github.io/sgw

## What’s inside

- A searchable grid of games (name + link)
- Tag-based search (comma-separated): try `dino`, `pacman`, `minesweeper`, etc.
- Simple static site (HTML/CSS/JS)

## Run locally

Because this project uses ES modules (`import ...`), you’ll want to serve it over HTTP (opening `index.html` via `file://` may not work in many browsers).

### Option A: Python

```bash
python -m http.server 8000
```

Then open http://localhost:8000

### Option B: Node (if you prefer)

```bash
npx serve .
```

## Add a new game

Games live in [data/games.js](data/games.js) and follow this structure:

```js
{ name: "Game Name", url: "https://example.com", tags: ["tag1", "tag2"] }
```

Tips:

- Keep `tags` short and searchable (lowercase works best).
- The search box accepts multiple tags separated by commas.

## Contributing

See:

- [CONTRIBUTING.md](CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

## License

MIT — see [LICENSE](LICENSE).
