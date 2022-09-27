import React, {ChangeEvent} from "react";
import "./MusterungsForm.css"

// Standardfunktion für eine React-Komponente
export default function MusterungsForm() {

    function handleChange(currywurstEvent: ChangeEvent<HTMLInputElement>) {
        const inputFeldName = currywurstEvent.target.name;
        const inputFeldType = currywurstEvent.target.type;

        let inputFeldValue;

        // Spezialfall! Bei Checkboxen muss man das Attribut "checked" abfragen um an den Wert zu kommen
        if (inputFeldType === "checkbox") {
            inputFeldValue = currywurstEvent.target.checked;
        } else {
            inputFeldValue = currywurstEvent.target.value;
        }

        console.log(`Input Name: ${inputFeldName} mit dem Wert ${inputFeldValue}`)
    }

    return (
        <div className="">
            {/* "form" Tag ist unser Form-Dokument */}
            <form>
                <label>
                    Vorname:
                    <input
                        name="vorname"
                        placeholder="Darth"
                        type="text"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Nachname:
                    <input
                        name="nachname"
                        placeholder=""
                        type="text"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Alter:
                    <input
                        name="alter"
                        placeholder="18"
                        type="number"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Ich habe die AGB gelesen und bin einverstanden:
                    <input
                        name="nachname"
                        type="checkbox"
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    );
}