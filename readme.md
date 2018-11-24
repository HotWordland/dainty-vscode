# Dainty for Visual Studio Code

Dainty is a configurable, refined, and balanced color theme using carefully selected colors within the CIELAB color space. It is designed to maximize readability and reduce eye strain.

_This is a preview version. More information will come soon._

## Setup

    git clone https://github.com/alexanderte/dainty-shared.git
    cd dainty-shared
    npm install
    cd ..
    git clone https://github.com/alexanderte/dainty-vscode.git
    cd dainty-vscode
    npm install

## Build and install

    npm run build -- -i

The `build` script, when run with `-i` or `--install` sets objects `workbench.colorCustomizations` and `editor.tokenColorCustomizations` in your `settings.json` to Dainty. This is the workflow used for development, and it is currently the only way to set the theme.

## Disable Dainty

    npm run build -- -i -d

The `build` script when run with `-d` or `--disable` in addition to `-i` or `--install` sets objects `workbench.colorCustomizations` and `editor.tokenColorCustomizations` in your `settings.json` to empty objects. This enables doing comparisons with the default theme.

## Configuration

Dainty for Visual Studio Code can be configured by editing `configuration.json`. See [Configuration among applications](https://github.com/alexanderte/dainty-shared/blob/master/configuration-shared.md) for more details.

## License

Dainty for Visual Studio Code is licensed under the [MIT License](https://github.com/alexanderte/dainty-vscode/blob/master/license.md).
