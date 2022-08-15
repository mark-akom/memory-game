
const Header = ({ currentScore, bestScore }) => {
  return (
    <header>
      <nav>
        <h2 className="app-logo">Emoji - Memory Game</h2>
        <ul>
          <li>
            <p>Current Score: {currentScore}</p>
          </li>
          <li>
            <p>Best Score: {bestScore}</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header