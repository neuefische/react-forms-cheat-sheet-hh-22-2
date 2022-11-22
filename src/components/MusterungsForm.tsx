import axios from "axios";
import React, {ChangeEvent, FormEvent, useState} from "react";
import "./MusterungsForm.css"

// Standardfunktion für eine React-Komponente
export default function MusterungsForm() {
    // Vorher:
    
    // stateName, setStateName
    // currywurst, setCurrywurst
    // false ist der default Wert - standardwert
    // checked = ✅
    // unchecked = ❌
    //     State    Funktion um State zu bearbeiten

    // const [vorname, setVorname] = useState("Dominic")
    // const [name, setNachname] = useState("Destrait")
    // const [alter, setAlter] = useState(0)
    // const [boxIsChecked, setBoxIsChecked] = useState(false)

    // Nacher: (Wir verpacken den State in EIN Objekt)
    const leereForm = {
        vorname: "",
        name: "",
        alter: 0,
        agb: false
    }
    const [musterungsForm, setMusterungsForm] = useState(leereForm)
    
    
    function handleChange(changeEvent: ChangeEvent<HTMLInputElement>) {
        // Unser Ziel:
        // Welches Input-Feld muss aktualisiert werden?
        const fieldName = changeEvent.target.name;
        const fieldValue = changeEvent.target.value;
        const fieldType = changeEvent.target.type;

        // setMusterungsForm <- Funktionsaufruf um State zu aktualisieren
        //   Arrow Function -> Ruft eine tieferliegende Funktion auf
        //   Mit "dieAlteMusterungsForm" nehmen wir die alte Form
        //   "...dieAlteMusterungsForm" kopiert alle Werte
        //   Aktualisiere NUR das Attribut DAS sich verändert hat
        //   [changeEvent.target.name]: changeEvent.target.value

        // Erklärung zu Fragezeichen und Doppelpunkt
        // https://www.w3schools.com/react/react_es6_ternary.asp
        setMusterungsForm(
            dieAlteMusterungsForm => ({
                ...dieAlteMusterungsForm,
                [changeEvent.target.name]:
                    fieldType === "checkbox" ? changeEvent.target.checked
                        : changeEvent.target.value
            }))
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        // Das MUSS hier stehen (in dieser Funktion)
        event.preventDefault()

        console.log("handleSubmit ", musterungsForm)

        // Jetzt kommt die normale Logik
        // Z.B. Daten verschicken
        axios.post('/hier/steht/unsere/api', {
            musterungsForm
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        
        // Form zurücksetzen
        setMusterungsForm(leereForm)
    }

    // JSX = Custom HTML mit React
    return (
        <div className="">
            {/* "form" Tag ist unser Form-Dokument */}
            <form onSubmit={handleSubmit}>
                <label>
                    Vorname:
                    {/* Das ist ein CONTROLLED COMPONENT*/}
                    {/* Weil wir benutzen VALUE */}
                    {/* VALUE bei input = CONTROLLED COMPONENT */}
                    <input
                        name="vorname"
                        placeholder="Darth"
                        type="text"
                        value={musterungsForm.vorname}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Nachname:
                    <input
                        name="name"
                        placeholder="Vader"
                        type="text"
                        value={musterungsForm.name}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Alter:
                    <input
                        name="alter"
                        placeholder="18"
                        type="number"
                        value={musterungsForm.alter}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Ich habe die AGB gelesen und bin einverstanden:
                    <input
                        name="agb"
                        type="checkbox"
                        checked={musterungsForm.agb}
                        onChange={handleChange}
                    />
                </label>

                <button>Formular senden</button>
            </form>
        </div>
    );
}