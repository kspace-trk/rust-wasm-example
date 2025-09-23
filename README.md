# Rust WebAssembly Example

このプロジェクトは、RustでWebAssemblyモジュールを作成し、ViteでモダンなWebアプリとして実行するサンプルです。

## 必要な環境

1. Rust（最新安定版）
2. wasm-pack
3. Node.js & npm

## セットアップ

### 1. Rustのインストール

(何かしらの方法で)

### 2. wasm-packのインストール

```bash
cargo install wasm-pack
```

### 3. 依存関係のインストール

```bash
cd web
npm install
```

## ビルドと実行

### 1. WebAssemblyモジュールをビルド

```bash
cd rust
wasm-pack build --target web --out-dir ../web/src/wasm
```

### 2. Vite開発サーバーを起動

```bash
cd web
npm run dev
```
