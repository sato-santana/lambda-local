# codespaces

### パッケージのインストール

`cd ./lambda`  
`npm ci`

### lambda を docker で起動(docker 単体)

1. lambda 関数用 の image を作成  
   `docker build -t myfunction:latest .`
1. 作成した image からコンテナを起動  
   `docker run -p 8080:8080 myfunction:latest`
1. lambda のエンドポイントに curl で post  
   `curl -XPOST "localhost:8080/2015-03-31/functions/function/invocations" -d '{}'`

##### その他 docker 操作

- 起動中のコンテナを表示  
  `docker ps`

- コンテナを停止  
  `docker kill <containerID>`

- コンテナ一掃  
  `docker rm $(docker ps -aq) --force`

- イメージ一掃  
  `docker rmi $(docker images -aq) --force`

### lambda を起動＋ localhost の DB に接続(docker-compose)

- lambda と postgres を起動  
  `docker-compose build && docker-compose up -d`
- 以降は curl で API 動作確認ができる

##### docker-compose の操作

- docker-compose の停止&削除  
  `docker-compose down`

- 確認  
  `docker-compose ps`
- 起動  
  `docker-compose start`
- 停止  
  `docker-compose stop`

### ローカルから postgres に接続

- DB に接続  
  `psql -h localhost -p 5432 -U postgres -d postgres`
- 接続終了  
  postgres のプロンプトで`exit`
