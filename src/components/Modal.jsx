import { createPortal } from "react-dom";
import Button from "./Button";
import Check from "../assets/check.svg";

export default function Modal({ showModal, closeModal, text }) {
    return (
        <>
            {showModal ? createPortal(
                <ModalContent text={text} closeModal={closeModal} />,
                document.body
            ) : <></>}
        </>
    );
}

function ModalContent({ text, closeModal }) {
    return (
        <section className="fixed top-0 h-screen w-screen bg-black bg-opacity-50 flex flex-col items-center justify-center lg:px-0 px-5">
            <div className="bg-white lg:w-2/5 w-full py-10 rounded-2xl flex flex-col items-center justify-center gap-10 lg:px-0 px-5">
                <div className="rounded-full bg-[#eb651c] w-16 h-16 flex items-center justify-center">
                    <img src={Check} className="w-8 h-8" />
                </div>
                <div className="font-bold text-black text-lg uppercase max-w-sm text-center leading-6">{text}</div>
                <Button value="Fermer" onClick={closeModal} inverted />
            </div>
        </section>
    )
}