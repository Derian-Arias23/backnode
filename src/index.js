import app from "./app.js";

function main() {
    app.listen(app.get("port"));
    console.log(`server on port ${app.get("port")}`);
}

main();