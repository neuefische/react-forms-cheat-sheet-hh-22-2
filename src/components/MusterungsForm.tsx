import React, {ChangeEvent, useState} from "react";
import "./MusterungsForm.css"

// Standardfunktion für eine React-Komponente
export default function MusterungsForm() {
    // stateName, setStateName
    // currywurst, setCurrywurst
    // false ist der default Wert - standardwert
    // checked = ✅
    // unchecked = ❌
    //     State    Funktion um State zu bearbeiten

    const [vorname, setVorname] = useState("Dominic")
    const [name, setNachname] = useState("Destrait")
    const [alter, setAlter] = useState(0)
    const [boxIsChecked, setBoxIsChecked] = useState(false)

    /*
    * Wie steuern wir Komponenten? #controlled components
    * */

    function handleChangeOld(changeEvent: ChangeEvent<HTMLInputElement>) {
        const inputFeldName = changeEvent.target.name;
        const inputFeldType = changeEvent.target.type;

        let inputFeldValue;

        // Spezialfall! Bei Checkboxen muss man das Attribut "checked" abfragen um an den Wert zu kommen
        if (inputFeldType === "checkbox") {
            // ein boolean (true oder false)
            inputFeldValue = changeEvent.target.checked;

            // Wir nehmen den Wert und drehen ihn um
            setBoxIsChecked(!boxIsChecked)
        } else {
            inputFeldValue = changeEvent.target.value;

            console.log(`${inputFeldName} = ${inputFeldValue}`)
            console.log(`${inputFeldName} State = ${vorname}`)

            // Der State "vorname" wird aktualisiert mit dem Value aus dem Input
            setVorname(inputFeldValue)
        }
    }

    function handleChange(changeEvent: ChangeEvent<HTMLInputElement>) {
        // Unser Ziel:
        // Welches Input-Feld muss aktualisiert werden?
        const fieldName = changeEvent.target.name;
        const fieldValue = changeEvent.target.value;
        const fieldPlaceholder = changeEvent.target.placeholder;

        console.log(changeEvent)

        if(fieldName === "vorname") {
            // Aktualisiere das jeweilige Input-Feld
            setVorname(fieldValue)
        }
        if(fieldName === "nachname") {
            // Aktualisiere das jeweilige Input-Feld
            setNachname(fieldValue)
        }
        if(fieldName === "alter") {
            // Aktualisiere das jeweilige Input-Feld
            setAlter(Number(fieldValue))
        }
        if(fieldName === "agb") {
            // Aktualisiere das jeweilige Input-Feld
            setBoxIsChecked(changeEvent.target.checked)
        }
    }

    // JSX = Custom HTML mit React
    return (
        <div className="">
            {/* "form" Tag ist unser Form-Dokument */}
            <form>
                <label>
                    Vorname:
                    {/* Das ist ein CONTROLLED COMPONENT*/}
                    {/* Weil wir benutzen VALUE */}
                    {/* VALUE bei input = CONTROLLED COMPONENT */}
                    <input
                        name="vorname"
                        placeholder="Darth"
                        type="text"
                        value={vorname}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Nachname:
                    <input
                        name="nachname"
                        placeholder="Vader"
                        type="text"
                        value={name}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Alter:
                    <input
                        name="alter"
                        placeholder="18"
                        type="number"
                        value={alter}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Ich habe die AGB gelesen und bin einverstanden:
                    <input
                        name="agb"
                        type="checkbox"
                        checked={boxIsChecked}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    );
}