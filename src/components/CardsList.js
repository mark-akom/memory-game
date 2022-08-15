import Card from './Card'

const CardsList = ({ listItems, updateScores }) => {
  return (
    <section className="cards-list">
      {
        listItems.map(cardData => {
          return <Card cardData={cardData} key={cardData.id} updateScores={updateScores} />
        })
      }
      </section>
  )
}

export default CardsList