import React, { useEffect, useState } from 'react'

const CardFilterPropsState = ({ mealTypes }) => {

    let [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes').then((res) => {
            return res.json();
        }).then((val) => {
            // console.log(val.recipes);
            setData(val.recipes);

        })
    }, [])


    return (
        <div>
            <div>
                {
                    mealTypes === 'All' ? (
                        data.map((e) => {
                            return (
                                <div className='card'>
                                    <img src={e.image} alt="" />
                                    <h2>{e.name}</h2>
                                    <button>View Item</button>
                                </div>
                            )
                        })
                    ) : (
                        data.filter((e) => e.mealType[0] === mealTypes).map((e) => {
                            return (
                                <div className='card'>
                                    <img src={e.image} alt={e.name} />
                                    <h2>{e.name}</h2>
                                    <button>{e.mealType[0]}</button>
                                </div>
                            );
                        })
                    )
                }
            </div>
        </div>
    )
}

export default CardFilterPropsState
