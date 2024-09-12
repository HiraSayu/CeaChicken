# docomo team C

## セットアップ

1. **Condaを使用してFastAPIとUvicornをインストール**
    ```bash
    conda install -c conda-forge fastapi uvicorn
    ```

2. **pipを使用して必要なパッケージをインストール**
    ```bash
    pip install boto3
    pip install passlib
    pip install fastapi[all]
    ```

## サーバーの起動

以下のコマンドを使用してサーバーを起動します。

1. **Uvicornを使用してFastAPIアプリケーションを起動**
    ```bash
    cd app
    uvicorn main:app --reload
    ```

2. **npmを使用してフロントエンドを起動**
    ```bash
    npm start
    ```

## 使用方法

サーバーが起動したら、ブラウザで `http://localhost:8000/docs`でバックエンド側単体で動作確認可能
