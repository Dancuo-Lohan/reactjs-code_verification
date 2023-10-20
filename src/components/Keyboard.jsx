import Button from "./Button";
import Input from "./Input";
import Key from "./Key";
import { useState } from "react";
import Modal from "./Modal";

const keys = [...Array(10).fill().map((_, i) => i)];
keys.push(...[...Array(26)].map((_, i) => String.fromCharCode(i + 65)));

const validCodes = {
    "WELCOME": "Vous bénéficiez de -20% sur votre commande",
    "IMHUNGRY23": "Une petite frite vous est offerte",
    "JAIDESCONTACTS": "La commande est gratuite (pensez au pourboire)"
}

export default function Keyboard() {

    const [inputValue, setInputValue] = useState('');
    const [modalText, setModalText] = useState('');

    const handleKeyClick = (key) => {
        setInputValue(inputValue + key);
    }

    const handleDeleteClick = () => {
        setInputValue(inputValue.slice(0, -1));
    }

    const handleClearClick = () => {
        setInputValue('');
    }

    const handleValidateClick = () => {
        if (validCodes[inputValue]) {
            setModalText(validCodes[inputValue]);
        } else {
            setInputValue('');
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <Input value={inputValue} />
            <ul className="grid lg:grid-cols-10 grid-cols-5 gap-y-5">
                {
                    keys.map((key, index) => <Key key={index} value={key} onClick={() => handleKeyClick(key)} />)
                }
            </ul>
            <div className="w-full flex lg:flex-row flex-col gap-5 justify-evenly">
                <Button value="Supprimer" onClick={handleDeleteClick} />
                <Button value="Vider" onClick={handleClearClick} />
                <Button value="Valider" onClick={handleValidateClick} />
            </div>
            <Modal showModal={modalText.length} text={modalText} closeModal={() => setModalText('')} />
        </div>
    )
}