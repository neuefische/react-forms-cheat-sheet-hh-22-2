import React, {ChangeEvent, useState} from "react";
import "./MusterungsForm.css"

// Standardfunktion für eine React-Komponente
export default function MusterungsForm() {
    // stateName, setStateName
    // currywurst, setCurrywurst
    // false ist der default Wert - standardwert
    // checked = ✅
    // unchecked = ❌
    const [boxIsChecked, setBoxIsChecked] = useState(false)

    /*
    * Wie steuern wir Komponenten? #controlled components
    * */

    function handleChange(changeEvent: ChangeEvent<HTMLInputElement>) {
        const inputFeldName = changeEvent.target.name;
        const inputFeldType = changeEvent.target.type;

        let inputFeldValue;

        // Spezialfall! Bei Checkboxen muss man das Attribut "checked" abfragen um an den Wert zu kommen
        if (inputFeldType === "checkbox") {
            // ein boolean (true oder false)
            inputFeldValue = changeEvent.target.checked;

            // Wir nehmen den Wert und drehen ihn um
            setBoxIsChecked(!boxIsChecked)
            // Rein logisch, ginge das auch
            // Wir nehmen den aktuellen Wert aus der Checkbox
            setBoxIsChecked(inputFeldValue)
        } else {
            inputFeldValue = changeEvent.target.value;
        }

        console.log(`Input Name: ${inputFeldName} mit dem Wert ${inputFeldValue}`)
    }

    // JSX = Custom HTML mit React
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
                        checked={boxIsChecked}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    );
}