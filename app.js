document.querySelector("#supersonic").addEventListener("change", changesupersonic);

function changesupersonic(event) {
    if(event.target.value === "Chaosemeralds") {
        let changesupersonic = document.querySelector(".transform");
        changesupersonic.setAttribute("src", "./SFSBSuperSonic.webp");

    }
}