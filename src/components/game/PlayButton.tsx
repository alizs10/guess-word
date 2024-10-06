import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

type ButtonProps = {
  children: string | JSX.Element
}


export default function PlayButton({ children }: ButtonProps) {

  const { startGame } = useContext(GameContext);

  const handleClick = () => {
    startGame()
  }

  return (
    <button onClick={handleClick} className="container rounded-full flex-center bg-primary w-fit">
      <h1 className="px-2 text-lg whitespace-nowrap">
        {children}
      </h1>
    </button>
  )
}
