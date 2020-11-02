# 天気の情報を取得するNode.jsのプログラム
天気の情報を取得し，メールで送信する．
gmail-sendを使用しているため，送信に使うメールアドレスはGメールを使用する．

# 天気の取得に使用するサイト
Yahoo!天気・災害の[提供RSS](https://weather.yahoo.co.jp/weather/rss/)

# Googleアカウントの設定
Googleアカウントのセキュリティで，安全性の低いアプリのアクセスをオンにする．

# モジュールのインストール
```
npm install request
npm install --save gmail-send
```

# 実行方法
コマンドラインに次のように入力
```
node mail_weather.js 宛先アドレス 送信元Gメールアドレス Googleアカウントのパスワード
```
## シェルスクリプト
シェルスクリプトを用意しているため，コマンドラインに次のように入力して実行し，メールアドレスとパスワードを入力することでも実行できる．

MacまたはLinuxの場合
```
bash mail_weather.sh
```

Windowsの場合
```
bash mail_weather.bat
```

# 参考
[HTMLのタイトルを取得する[Node.js,シェルスクリプト]](https://qiita.com/oha-yashi/items/e62711ae74b17a665a5d)

[Node.js Gmail送信](https://qiita.com/chenglin/items/f69783c08e56eac3a43e)
