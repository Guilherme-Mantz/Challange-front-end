export default function CardActor ({persons}) {
    return (
        <>
        {persons.map((person) => {
            return (
                <div className="card-actor shadow">
                    <img src={'https://image.tmdb.org/t/p/w500'+person.profile_path} id="actor-image" className="rounded image-fluid" alt={person.name}  width="175" height="222"/>
                        <div id="personageActor">
                            <p>{person.name}</p>
                            <p className="text-left" style={{fontWeight: 300}}>{person.character}</p>
                        </div>                        
                </div>
            )
        })
        }
        </>
    )
};