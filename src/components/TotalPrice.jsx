function TotalPrice({ totalOrder }) {
    return (
        <>
            <section className="orderPage--total">
                <p>Totalt värde på order</p>
                <h2>{totalOrder}</h2>
            </section>
        </>
     );
}

export default TotalPrice;