import "./Home.css"

function Home(){
    return (
        <section className="Hero">
            <div className="buffer">
            </div>
            <div className="top">
                <div className="top-left">
                    <img src="/src/assets/react.svg"/>
                </div>
                <div className="top-right">
                    <img src="/src/assets/vite.svg" />
                </div>
            </div>
            <div className="Middle">
                <div className="photo">
                    <img src = "/src/assets/hero.png"/>
                </div>
                <div className="left">
                    <h1>
                        Hi I am Navaneeth.V
                    </h1>
                    <p>
                        I am a college student at IITH pursuing btech in CSE department
                    </p>
                </div>
                <div className="right">
                    <p>
                        I develop apps preferably from scratch. I like systems thinking and is eager to learn more about systems. I enjoy devoloping games and is enthusiastic to colaborate with companies
                    </p>
                </div>
            </div>
            <div className="Bottom">

            </div>
            
            
        </section>
    )
}

export default Home;