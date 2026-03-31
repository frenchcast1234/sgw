# Contributing to Secret Games Wiki

Thanks for helping improve the wiki!

## What you can contribute

- Add a new game link
- Improve tags for existing games
- Fix typos / broken links
- Small UI/UX improvements (keep it simple)

## Adding (or editing) a game

Games are stored in [data/games.js](data/games.js) as objects:

```js
{ name: "Game Name", url: "https://example.com", tags: ["tag1", "tag2"] }
```

Guidelines:

- **Use trustworthy links** (prefer official Google doodles/pages or well-known sources).
- **Keep tags searchable**: short, lowercase words work best.
- **Avoid duplicates**: check the list and search first.

## Local testing

This repo uses ES modules, so run it with a local server:

```bash
python -m http.server 8000
```

Open http://localhost:8000 and verify:

- The new item appears in the grid
- Searching by one of your tags works

## Pull request workflow

1. Fork the repo
2. Create a branch (example: `add-mafia-game`)
3. Make your change
4. Open a pull request with:
   - What you added/changed
   - The URL you added
   - A short list of tags you chose

## Code of Conduct

By participating, you agree to follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
