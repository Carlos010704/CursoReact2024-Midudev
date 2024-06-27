import { TwitterFollowCard } from "./TwitterFollowCard";


const users = [
    { userName: 'midudev', name: 'Miguel Ángel Durán', isFollowing: true },
    { userName: 'dimontemx', name: 'Mauricio Di Monte', isFollowing: false },
    { userName: 'rojapatrulla', name: 'Patrulla Roja', isFollowing: false },
    { userName: 'isabelduquee', name: 'Isabel Duque', isFollowing: false }
];

function App() {
    return (
        <section className="App">
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user;

                    return (
                        <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing} > {name} </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}

export default App;