# Dainty for Visual Studio Code

Dainty is a color theme generator with support for Visual Studio Code. Dainty Light and Dainty Dark are the default presets. They’re balanced and refined color themes, using carefully selected colors within the CIELAB color space.

## Setup

    git clone https://github.com/alexanderte/dainty-vscode.git
    cd dainty-vscode
    yarn

## Build and install

    yarn build -i

The `build` script, when run with `-i` or `--install` sets objects `workbench.colorCustomizations` and `editor.tokenColorCustomizations` in your `settings.json` to Dainty.

## Disable Dainty

    yarn build -i -d

The `build` script when run with `-d` or `--disable` in addition to `-i` or `--install` sets objects `workbench.colorCustomizations` and `editor.tokenColorCustomizations` in your `settings.json` to empty objects. This enables doing comparisons with the default theme.

## Configuration

Dainty can be configured by editing `configuration.json`. The file is generated if it doesn’t exist while running `yarn build`. See [Configuration](https://github.com/alexanderte/dainty-shared/blob/master/configuration.md) for more information.

## License

Dainty is licensed under the [MIT License](https://github.com/alexanderte/dainty-vscode/blob/master/license.md).
