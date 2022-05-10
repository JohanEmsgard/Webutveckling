document.querySelector("#supersonic").addEventListener("change", changesupersonic2);

function changesupersonic2(event) {
    if(event.target.value === "Chaosemeralds") {
        let changesupersonic2 = document.querySelector(".supersonic2");
        changesupersonic2.setAttribute("src", "./SFSBSuperSonic.webp");

    }
}

