// TYPE ANY

let x : any;
x = 10;
x = "texto";
x = false;

// TYPE UNKNOWN

let y : unknown;
y = 10;
y = "texto";
if (typeof y === "string") {
    y.toUpperCase();
}

if (typeof y === "number") {
    y.toFixed(2);
}