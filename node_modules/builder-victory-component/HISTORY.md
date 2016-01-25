History
=======

## 0.1.2

* Fix hot reload configuration

## 0.1.1

* Don't `git add -A dist` in the `npm:version` task. `dist/` should not be committed, just published along with `lib/` to NPM.

## 0.1.0

* Upgrade to Radium 0.16.2 with server-side-rendered media queries.
  This is a breaking change; Please refer to the [Radium upgrade guide][radium-0.16-upgrade-guide]
* Add DEVELOPMENT, CONTRIBUTION guides for Victory

## 0.0.9

* Ensure webpack exits with status 1 on errors

## 0.0.8

* Fix issue with exported React global in UMD distribution bundle
  - Enables use of Victory via e.g. NPMCDN

## 0.0.7

* Build both `dist/` and `lib/` on `postinstall`

## 0.0.6

* Fix issue with `builder docs-*` output paths

## 0.0.5

* Add raw-loader and react-docgen to support building Ecology docs

## 0.0.4

*  this release
  - removes references to removed webpack loaders (style, url etc)
  - corrects the paths for new doc scripts
  - adds `push-gh-pages` script

## 0.0.3

* test release

## 0.0.2

* Release according to the [fine manual][]

## 0.0.1

* Initial release. ( [@coopy][] )

[@coopy]: https://github.com/coopy
[fine manual]: https://github.com/FormidableLabs/builder-victory-component/blob/master/CONTRIBUTING.md
[radium-0.16-upgrade-guide]: https://github.com/FormidableLabs/radium/blob/master/docs/guides/upgrade-v0.16.x.md
