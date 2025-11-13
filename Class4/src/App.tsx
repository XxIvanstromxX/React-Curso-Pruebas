import CardX from "./components/card"
import "./App.css"
import "./components/card.css"

const users = [
    {
        userName: 'xVan24x',
        name: 'Ivan Martinez',
        isFollowing: true
    },
    {
        userName: 'Indie5051',
        name: 'Indie 505',
        isFollowing: false
    },
    {
        userName: 'EnMexicoMagico',
        name: 'Mexico Magico',
        isFollowing: false
    },
    {
        userName: 'kanyewests',
        name: 'ye',
        isFollowing: true
    }
]

const App = () => {

  return (
    <>
      <section className="card">
        {users.map(({userName, name, isFollowing}) => (
            <CardX 
                key={userName}
                userName={userName} 
                name={name} 
                initialIsFollowing={isFollowing} 
            />
        ))}
      </section>
    </>
  )
}

export default App