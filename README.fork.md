# Full list of changes:

- Based on latest release.
- Removed telemetry with scripts from [VScodium](https://vscodium.com/) project.
- Applied transparency patch by @sylveon https://github.com/Microsoft/vscode/pull/52707 and needed fixes to make transparency work under Linux.
- Added background opacity theme colors to allow transparency to be applied to any theme. See below for details.
- Ripgrep (used for "find in files") now respects configuration file (`--no-config` is not passed).

# Using opacity theme colors

The idea is that instead of overriding multiple background colors for all color themes you use,
you can just specify this color's opacity value globally and it will be automatically applied whatever theme you switch to.

For example, if some theme `MyTheme` have `editor.background` set to `#808080` (gray) and you have
```json
{
	"workbench.colorCustomizations": {
		"editor.background.opacity": "#00000060"
	}
}
```
in your settings JSON, it would be equal to
```json
{
	"workbench.colorCustomizations": {
		"[MyTheme]": {
			"editor.background": "#80808060"
		}

	}
}
```

Here is sample configuration which lists all background colors which can be customized this way:
```javascript
{
    "workbench.colorCustomizations": {
        // This one is essential for proper transparency
        "workbench.background": "#00000000",

        "activityBar.background.opacity": "#0007",
        "sideBar.background.opacity": "#000b",
        "editorGroupHeader.tabsBackground.opacity": "#0007",
        "editor.background.opacity": "#0006",
        "panel.background.opacity": "#000000e0",
        "terminal.background.opacity": "#00000000",
        "tab.activeBackground.opacity": "#0005",
        "editorGroup.emptyBackground.opacity": "#000f",
        "tab.inactiveBackground.opacity": "#0005"
    },
    "window.transparent": true,
}
```