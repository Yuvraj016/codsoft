let input = document.querySelector(".display input");
let buttons = document.querySelectorAll("input");

let string = "";
let evaluated = true;
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.value;
        
        if (value === "=") {
            try {
                string = eval(string);
                input.value = string;
                evaluated = true;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (value === "AC") {
            string = "";
            input.value = "";
        } else if (value === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            if (evaluated) {
                string = "";
                evaluated = false;
            }
            string += value;
            input.value = string;
        }
    });
});
