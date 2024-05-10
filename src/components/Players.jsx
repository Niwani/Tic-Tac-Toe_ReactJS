import { useState } from 'react';

export default function Player({ symbol, initialName, isActive, onChangeName}) {
    const [playerName, setPlayerName ] = useState(initialName)
    const [isEditting, setIsEditting] = useState(false);

   function editHandler() {
        setIsEditting((editing) => !editing)

        if(isEditting) {
            onChangeName(symbol, playerName)
        }
   }
   
   function changeHandler(event) {
    setPlayerName(event.target.value)
   }

   let editableNewName = <span className='player-name'>{playerName}</span>

   if(isEditting) {
    editableNewName = <input type='text' required value={playerName} onChange={changeHandler} />
   }

    return (
            <li className={isActive ? 'active' : undefined}>
                <span className="player">
                    {editableNewName}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={editHandler}>{isEditting ? 'save' : 'edit'}</button>
            </li>
    )
}