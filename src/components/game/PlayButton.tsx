import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

export default function PlayButton() {

  const { startGame } = useContext(GameContext);

  const handleClick = () => {
    startGame()
  }

  return (
    <button onClick={handleClick} className="mx-auto mt-32 bg-gray-200 rounded-full size-32 flex-center dark:bg-gray-800">
      <h1 className="text-3xl">
        Play
      </h1>
    </button>
  )
}
