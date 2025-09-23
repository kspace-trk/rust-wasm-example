import './style.css'
import init, { greet } from './wasm/rust_wasm_example.js'

// DOM要素にメッセージを表示する関数
function displayMessage(message: string) {
  const consoleMessages = document.getElementById('console-messages')
  if (consoleMessages) {
    const messageElement = document.createElement('div')
    messageElement.textContent = message
    messageElement.style.marginBottom = '5px'
    consoleMessages.appendChild(messageElement)
  }
  // 通常のコンソールにも出力
  console.log(message)
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
        const message = greet(name)
        displayMessage(message)
      })
    }
    
    displayMessage('WebAssemblyモジュールが正常に読み込まれました！')
  } catch (error) {
    console.error('WebAssemblyモジュールの読み込みに失敗しました:', error)
    displayMessage(`エラー: ${error}`)
  }
}

run()