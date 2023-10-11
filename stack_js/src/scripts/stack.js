console.log("hello");

let stack1 = [];
let N = 12;

function PushOur() {
    if (stack1.length < N) {
        const a = parseFloat(document.getElementById("pushValue").value);
        if (!isNaN(a)) {
            stack1.push(a);
            console.log(stack1);
            document.getElementById("displayStack").textContent = stack1.join(', ');
        } else {
            alert("Invalid input. Please enter a number.");
        }
    } else {
        alert("Stack full");
    }
}

function PopOur() {
    if (stack1.length > 0) {
        const poppedValue = stack1.pop();
        alert("Popped element " + poppedValue);
        console.log(stack1);
        document.getElementById("displayStack").textContent = stack1.join(', ');
    } else {
        alert("Stack empty");
    }
}

function SizeOur() {
    alert("Size stack " + stack1.length);
}

function Back() {
    if (stack1.length > 0) {
        const topValue = stack1[stack1.length - 1];
        alert("Top element " + topValue);
    } else {
        alert("Stack empty");
    }
}

function ClearOur() {
    stack1 = [];
    document.getElementById("displayStack").textContent = "";
    alert("Cleared");
}
