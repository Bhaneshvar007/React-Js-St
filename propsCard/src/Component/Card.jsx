const Card = ({ company, Location, img }) => {
    return (
        <>
            <div className="w-96 border border-gray-500 text-center rounded overflow-hidden">
                <img className="h-60 w-[100%] object-cover	" src={img} alt="" />
                <h2 className="font-bold m-5">{company}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod voluptatem quia quasi inventore. Illo id, ullam officiis ab, inventore excepturi architecto aperiam porro autem rerum sed at tempora cumque sit.</p>
                <h2 className="m-3 font-bold">{Location}</h2>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore</button>
            </div>
        </>
    )
}

export default Card;