// 簡単な計算機機能
class Calculator {
    constructor() {
        console.log("計算機を初期化しました");
    }

    add(a, b) {
        const result = a + b;
        console.log(`${a} + ${b} = ${result}`);
        return result;
    }

    subtract(a, b) {
        const result = a - b;
        console.log(`${a} - ${b} = ${result}`);
        return result;
    }

    multiply(a, b) {
        const result = a * b;
        console.log(`${a} × ${b} = ${result}`);
        return result;
    }

    divide(a, b) {
        if (b === 0) {
            console.log("エラー: ゼロで割ることはできません");
            return null;
        }
        const result = a / b;
        console.log(`${a} ÷ ${b} = ${result}`);
        return result;
    }
}

// 使用例
const calc = new Calculator();
calc.add(10, 5);
calc.subtract(10, 3);
calc.multiply(4, 7);
calc.divide(20, 4);
calc.divide(10, 0); // エラーケースのテスト

module.exports = Calculator;