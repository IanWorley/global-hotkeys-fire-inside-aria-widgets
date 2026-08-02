# Global hotkeys firing inside an ARIA widget

Minimal reproduction for [TanStack Hotkeys issue #138](https://github.com/TanStack/hotkeys/issues/138).

The demo registers `ArrowDown` as a document-level hotkey with `useHotkey`. It also renders a Radix dropdown menu that uses `ArrowDown` to move focus between its menu items.

When the menu is open, one `ArrowDown` keypress moves focus to the next menu item **and** increments the global hotkey counter.

## Run the demo

### Open in StackBlitz

[Open the repository in StackBlitz](https://stackblitz.com/github/IanWorley/global-hotkeys-fire-inside-aria-widgets)

### Run locally

```bash
git clone https://github.com/IanWorley/global-hotkeys-fire-inside-aria-widgets.git
cd global-hotkeys-fire-inside-aria-widgets
npm install
npm run dev
```

Open the local URL printed by Vite.

## Steps to reproduce

1. Open the dropdown menu.
2. Press `ArrowDown` to move through the menu items.
3. Watch the selected menu item and the global hotkey counter.

## Actual behavior

The menu moves focus to the next item, and the document-level `ArrowDown` hotkey also fires, incrementing the counter.

## Expected behavior

When a focused widget uses a key for its own keyboard interaction, a matching global hotkey should not fire. In this example, `ArrowDown` should move focus within the menu without incrementing the global hotkey counter.

## Relevant dependencies

- React 19
- `@tanstack/react-hotkeys` 0.10
- Radix UI
