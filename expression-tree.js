const assert = require("assert");

const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "x": (a, b) => a * b,
    "÷": (a, b) => {
        if (b === 0) throw new Error("Denominator can not be zero")
        return a / b
    }
}

const Operand = (num) => {
    const result = () => num
    const toString = () => num.toString()

    return {
        result,
        toString
    }
}

const Operator = (operator, left, right) => {
    const result = () => {
        const operation = operators[operator]
        if (operation) {
            return operators[operator](left.result(), right.result())
        }
        throw new Error(`${operator} is invalid Operator`)
    };

    const toString = () => `(${left.toString()} ${operator} ${right.toString()})`

    return {
        result,
        toString
    };
};

const tree = Operator(
    "÷",
    Operator(
        "+",
        Operand(7),
        Operator(
            "x",
            Operator("-", Operand(3), Operand(2)),
            Operand(5)
        )
    ),
    Operand(6)
);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());

