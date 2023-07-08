# leading-twitter-clone_team_b

## .env ファイル作成

リポジトリをクローンしたら backend フォルダと frontend フォルダの中で`cp .env.example .env`を実行し、それぞれ.env.sample の内容を.envにコピーしてください。

## backend/.env SECRET_KEY設定

backend/.envでのSECRET_KEYを空欄にしない

## npm install

リポジトリをクローンした後初めてコンテナを起動する前に frontend ディレクトリで`npm install`を実行してください。

## サーバーの起動

※make コマンドは Makefile があるディレクトリで実行してください。

初回や docker-compose.yml や Dockerfile、requirements.txt に変更があった場合に使用します。
Docker イメージのビルドとコンテナの起動を行います。時間かかります。
DRF のコンテナと PostgreSQL のコンテナ,React のコンテナが起動します。
実行後にサーバーにアクセスできます。

```
$ make loc
```

初回以降は下記コマンドで起動が可能です。

```
$ make up
```

- バックエンド
  - http://localhost:8000
- APIドキュメント
  - http://localhost:8000/api/schema/swagger-ui/
- フロントエンド
  - http://localhost:3000

## 開発環境の削除

Docker で構築した開発環境を削除する
作業を終えるときに使う。再開するときは `make up`

```
$ make down
```

## 備考

#### バックエンドのシェルに接続するコマンド

```
$ make exec-back
```

#### フロントエンドのシェルに接続するコマンド

```
$ make exec-front
```

#### DB に接続するコマンド

```
$ make exec-db
```

#### DB のデータをリセットするコマンド

```
$ make clean-db
```

#### すべてを削除するコマンド

停止しているコンテナ、未使用のボリューム、未使用のネットワーク、未使用のイメージなどすべてを削除

```
$ make clean
```
