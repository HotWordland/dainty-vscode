# Dainty for Visual Studio Code

Dainty is a configurable, refined, and balanced color theme for Visual Studio Code drawing inspiration from the default theme of VS Code. It is designed to maximize readability and reduce eye strain, making it more pleasant to work with code all day long.

_This is a preview version. More information will follow soon._

## Setup

    git clone https://github.com/alexanderte/dainty-vscode.git
    cd dainty-vscode
    npm install

## Modify `settings.json`

    npm run modify-settings

_Any previous customizations within these objects, and any comments in `settings.json` will be removed. However, the original file is backed up to the `backup` directory._

The `modify-settings` script sets objects `workbench.colorCustomizations` and `editor.tokenColorCustomizations` in your `settings.json` to Dainty. This is the workflow used for development, and it is currently the only way to set the theme.

### Temporarily disable Dainty

To do comparisons with the default theme it can be useful to disable Dainty temporarily. To do so, run:

    npm run modify-settings - --disable

## License

Dainty for Visual Studio Code is licensed under the [MIT License](https://github.com/alexanderte/dainty-vscode/blob/master/license.md).
