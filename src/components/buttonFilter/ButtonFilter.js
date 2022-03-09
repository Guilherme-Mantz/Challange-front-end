export default function ButtonFilter({value}) {
    return (
        <>
        {value.map((filter) => {
            return <div className="col mb-3 pe-1 ps-1" key={filter}><button type="button" className="btn btn-primary">{filter}</button></div>
        })}
        </>
    )
};