---
template: SinglePost
title: Gatsby使い方　Step1
status: Featured / Published
date: '2019-07-01'
featuredImage: 'https://ucarecdn.com/50261905-a858-4e60-85f0-7258413f259c/'
excerpt: ' Gatsby使い方　Step1ー　このページはGatsbyのインストールの仕方を紹介　NodeJS（HomeBrew）をインストールした後に、Gatsbyとそのスターターをインストールして実際にサイトを動かします'
categories:
  - category: Gatsbyチュートリアル
meta:
  canonicalLink: ''
  description: 分かりやすいGatsbyのチュートリアルのステップ１、インストールと設定
  noindex: false
  title: Gatsby使い方　Step1
---

![Gatsby JS logo image](https://ucarecdn.com/50261905-a858-4e60-85f0-7258413f259c/ "Gatsby JS ")

準備　コマンドラインを使えるようになろう

マックの方は[このリンク](https://techacademy.jp/magazine/5155)　｜　ウィンドウズの方は[このリンク](https://techacademy.jp/magazine/5318)の参照をお勧めします

## NodeJSとGatsbyのインストールはHomeBrewからがお勧め

1. [このリンク](https://brew.sh/index_ja)からHomeBrew（ホームブリュー）をインストール

## NodeJSとnpmをインストール

   インストール後はターミナル、もしくはコマンドプロンプトを開いて下記のコマンドをうつ

1. まずはHomeBrewを最新のバージョンにします


  ```
  brew update
  ```


2. 次にNodeJSをインストール


````
    ```
    brew install node
    ```
````

3. 次にNodeJSとNpmのバージョンをチェック


````
    ```
    node -v
    ```
    ```
    npm -v
    ```
````

もしくは

[Macの方](https://nodejs.org/en/)
    ->Recommended For Most Usersをクリック。pkgファイルがダウンロードされるので、クリックしてインストール

[Windowsの方](https://nodejs.org/en/download/)
    ->Windowsをクリックするとダウンロードが始まりますので、インストール
    もしくはマックのインストールと同じ手順で行いましょう

## Gatsbyのインストール

  次にターミナル、もしくはコマンドプロンプトより下記を入力してギャッツビーをインストール

```
npm install -g gatsby-cli
```

## Gatsbyのスターターファイルを作成

1. ターミナル、もしくはコマンドプロンプトを開きギットハブからスターターをダウンロード


```
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

2. スターターファイル、Hello-Worldを開く


```
cd hello-world
```

3. ギャッツビーのウェブサイトを走らせてみる


```
gatsby develop
```

これでブラウザ（グーグルクロームを使用）を開いて「localhost:800」とURLにタイプ

### ギャッツビーコマンドの説明

* new　は新しいGatsbyコマンドを作成するコマンド　
* 二つ目のファイル名は自分の好みのものに変更可

下記のような画面が表示されましたか？

![Gatsby スターターをウェブブラウザに表示した際の最初の画面](https://ucarecdn.com/d8665d92-df76-4d48-9c4b-07ea26a7d304/ "Gatsbyスターター画面")
