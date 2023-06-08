# leading-twitter-clone_team_b


## .envファイル作成
リポジトリをクローンしたらbackendフォルダとfrontendフォルダの中に.envファイルを作成し、それぞれ.env.sampleの内容をコピーしてください。
## サーバーの起動
※makeコマンドはMakefileがあるディレクトリで実行してください。

初回やdocker-compose.ymlやDockerfile、requirements.txtに変更があった場合に使用します。
Dockerイメージのビルドとコンテナの起動を行います。時間かかります。
DRFのコンテナとPostgreSQLのコンテナ,Reactのコンテナが起動します。
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
- フロントエンド
    - http://localhost:3000


## 開発環境の削除
Dockerで構築した開発環境を削除する
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
#### DBに接続するコマンド
```
$ make exec-db
```
#### DBのデータをリセットするコマンド
```
$ make clean-db
```
#### すべてを削除するコマンド
停止しているコンテナ、未使用のボリューム、未使用のネットワーク、未使用のイメージなどすべてを削除
```
$ make clean
```
