# levis


## 動作環境

```
node
v10.16.3

gulp
CLI version: 2.2.0
Local version: 3.9.1

で動作確認済み。

```

## Build Setup

``` bash
# install dependencies
npm install

```

## 制作前に

```
おそらく

TypeError [ERR_INVALID_ARG_TYPE]: The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type object

というエラーメッセージが出るので

/node_modulues/gulp-combine-media-queries/index.js
の152目の
file.contents = new Buffer(cssJson);
をコメントアウト。

```

## build command

```
gulp
```

## 制作中は

```
development/
以下に html, css, jsファイルが生成されます。

画像ファイルは直接
development/image/
へ入れてください。
```

## 納品時

```
pug/_config.pug 内の

var path

を "CMS登録時用" に切り替えて、index.htmlを生成してください。
```
