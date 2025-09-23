import './style.css'
import init, { greet } from './wasm/rust_wasm_example.js'

// コンソールログを画面に表示するための関数
const consoleMessages = document.getElementById('console-messages')
const originalLog = console.log

console.log = function(...args: any[]) {
  originalLog.apply(console, args)
  const message = args.join(' ')
  const messageElement = document.createElement('div')
  messageElement.textContent = message
  messageElement.style.marginBottom = '5px'
  if (consoleMessages) {
    consoleMessages.appendChild(messageElement)
  }
}

async function run() {
  try {
    // WebAssemblyモジュールを初期化
    await init()
    
    // ボタンのイベントリスナーを設定
    const greetButton = document.getElementById('greet-button')
    if (greetButton) {
      greetButton.addEventListener('click', () => {
        const nameInput = document.getElementById('name-input') as HTMLInputElement
        const name = nameInput?.value || 'World'
        greet(name)
      })
    }
    
    console.log('WebAssemblyモジュールが正常に読み込まれました！')
  } catch (error) {
    console.error('WebAssemblyモジュールの読み込みに失敗しました:', error)
  }
}

run()