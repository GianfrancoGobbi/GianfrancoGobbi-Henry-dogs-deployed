export default function Validaciones(input) {
    let errors = {};
    if (input.name === "") {
        errors.name = "Debe tener un nombre";
    } else if (input.name.length < 3) {
        errors.name = "Debe tener al menos 3 caracteres";
    } else if (input.name.length > 20) {
        errors.name = "Debe tener menos de 20 caracteres";
    } else if (input.name.includes(".")) {
        errors.name = "No puede contener punto";
    } else if (input.name.includes("!")) {
        errors.name = "No puede contener exclamación";
    } else if (input.name.includes("?")) {
        errors.name = "No puede contener interrogación";
    } else if (input.name.includes("¿")) {
        errors.name = "No puede contener ¿";
    } else if (input.name.includes("¡")) {
        errors.name = "No puede contener ¡";
    } else if (input.name.includes("#")) {
        errors.name = "No puede contener #";
    } else if (input.name.includes("$")) {
        errors.name = "No puede contener $";
    } else if (input.name.includes("%")) {
        errors.name = "No puede contener %";
    } else if (input.name.includes("&")) {
        errors.name = "No puede contener &";
    } else if (input.name.includes("(")) {
        errors.name = "No puede contener (";
    } else if (input.name.includes(")")) {
        errors.name = "No puede contener )";
    } else if (input.name.includes("*")) {
        errors.name = "No puede contener *";
    } else if (input.name.includes("+")) {
        errors.name = "No puede contener +";
    } else if (input.name.includes("-")) {
        errors.name = "No puede contener -";
    } else if (input.name.includes("/")) {
        errors.name = "No puede contener /";
    } else if (input.name.includes("=")) {
        errors.name = "No puede contener =";
    } else if (input.name.includes(";")) {
        errors.name = "No puede contener ;";
    } else if (input.name.includes("<")) {
        errors.name = "No puede contener <";
    } else if (input.name.includes(">")) {
        errors.name = "No puede contener >";
    } else if (input.heightmin > input.heightmax) {
        errors.heightmin = "La altura mínima no puede ser mayor que la altura máxima";
    }
    return errors;
}
