let screenResults = document.getElementById("screen-results");

let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            default:
                if (screenResults.innerText.length < 10) {
                    screenResults.innerText += e.target.innerText;
                }
                break;
            case "AC":
                screenResults.innerText = "";
                break;
            case "back":
                if (screenResults.innerText.length > 0) {
                    screenResults.innerText = screenResults.innerText.slice(
                        0,
                        -1
                    );
                }
                break;
            case "+/-":
                screenResults.innerText = screenResults.innerText * -1;
            case "=":
                try {
                    screenResults.innerText = eval(screenResults.innerText)
                        .toString()
                        .slice(0, 10);
                } catch {
                    screenResults.innerText = "Error!";
                }
                break;
        }
    });
});
