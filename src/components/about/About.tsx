import { useContext } from "react";
import Modal from "../common/Modal";
import { AppContext } from "../../context/AppContext";

export default function About() {

    const { aboutVis, setAboutVis } = useContext(AppContext)

    function onClose() {
        setAboutVis(false)
    }

    return (
        <Modal isOpen={aboutVis} onClose={onClose}>
            <div className="flex flex-col p-10 gap-y-3">
                <h1 className="text-3xl text-gray-700 dark:text-gray-300">
                    About Game
                </h1>

                <p className="text-lg leading-6 text-justify">
                    There are 3 levels of difficulty: Easy, Medium, and Hard.
                    <br />

                    Easy Mode gives you a word with a minimum length of 4 and a maximum length of 5. The values for other modes are: Medium: 6-7, Hard: 8-9.
                    <br />
                    It would be best if you guessed the chosen word with the fewest guesses and in the shortest time possible.
                </p>

                <p>
                    Designed and Developed by @alizs10
                    <br />
                    October 2024
                    <br />
                    version: 1.0.0
                </p>
            </div>
        </Modal>
    )
}
