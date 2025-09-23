use wasm_bindgen::prelude::*;

// JavaScript の `console.log` をインポート
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

// `console.log` を使いやすくするマクロ
macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

// JavaScript から呼び出せる関数をエクスポート
#[wasm_bindgen]
pub fn greet(name: &str) {
    console_log!("Hello, {}! from Rust and WebAssembly", name);
}

// 初期化時に自動実行される関数
#[wasm_bindgen(start)]
pub fn main() {
    console_log!("Rust WebAssembly module loaded!");
}
