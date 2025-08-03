// 簡単なHello Worldスクリプト
console.log("Hello, GitHub MCP!");

function greet(name) {
    return `こんにちは、${name}さん！GitHub MCP デモへようこそ。`;
}

console.log(greet("世界"));

// 現在の日時も表示
const now = new Date();
console.log(`実行時刻: ${now.toLocaleString('ja-JP')}`);