document.querySelector("#supersonic").addEventListener("change", changetransform)

function transform(event) {
    if(event.target.value === "Chaosemeralds") {
        let transform = document.querySelector(".transform");
        transform.Changetransform.setAttribute("src", "./SFSBSuperSonic.webp");

    }
}