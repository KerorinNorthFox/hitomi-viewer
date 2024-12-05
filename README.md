# Hitomi Viewer
A vertical scroll viewer compatible [hitomi.la](https://hitomi.la).

[hitomi.la](https://hitomi.la)に対応した縦スクロールビューワーです。

# Feature
## Vertical scrolling (縦スクロール機能)
縦にスクロールするだけで見れるようにしました。

## Switch hands (持ち手切り替え機能)
スマホでの使用時、右手と左手でスクロールしやすくするためにコンテンツを片側に偏らせます。

## Hide unnecessary page (非表示機能)
不要なページを非表示にできます

# Usage
貧乏すぎてサーバーを準備できないので、個別でサーバー立てて実行してください。

同じネットワーク内ならば、localhostで実行したサーバーに他端末でアクセスできます。
## 手順
1. node.jsをpcにインストールする。
 
https://nodejs.org/en/download/package-manager
```bash
// インストールできているか確認
$ node --version
$ npm --version
```

2. このrepositoryをcloneする
```bash
$ git clone git@github.com:KerorinNorthFox/hitomi-viewer.git
```
3. 依存関係をインストールする
```bash
$ cd hitomi-viewer
$ npm install
```
4. アプリをビルドする
```
$ npm run build
```
5. サーバーを立ててアプリを実行する
```
// nodejsでサーバーを立てます
$ node build
Listening on 0.0.0.0:3000 // 3000番ポートでサーバーを実行
```
6. サーバーにアクセスする
```
"http://自分のローカルipアドレス:3000/" でアクセス可能

ipアドレスは
$ ipconfig
で"Wireless LAN adapter Wi-Fi"の"IPv4 アドレス"を確認する (192.168.x.x)
```

# Precautions of use (使用上の注意)
1. 元サイトの特性により、画像をそのまま表示する方法ではなくiframeタグで元サイトのreaderページを縦に並べる仕組みになっています。そのためブラウザがとても重くなる他、最悪ブラウザが落ちる可能性があります。
2. サーバーでは変換実行時に元サイトのスクレイピングを行います。