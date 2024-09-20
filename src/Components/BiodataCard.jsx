export default function BiodataCard({ bio }) {
    return (
        <div className="body">
            <div className="div">
                <h3>{bio.nama}</h3>
                <img src={bio.Image} alt="" />
                <h3>{bio.ttg}</h3>
                <p>{bio.age}</p>
                <p>{bio.hobie}</p>
            </div>
        </div>
    )
}