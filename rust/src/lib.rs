use wasm_bindgen::prelude::*;

// JavaScript から呼び出せる関数
#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    let result = format!("Hello, {}! from Rust and WebAssembly", name);
    result
}
