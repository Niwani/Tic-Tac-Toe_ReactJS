import './score-board.css';

export default function ScoreBoard({player1, player2, score1, score2}) {
   
    return (
        <div className='score-board'>
            <p>{player1} {score1} : {score2} {player2}</p>
        </div>
    )
}