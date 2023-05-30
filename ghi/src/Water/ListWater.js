import React, { useEffect, useState } from 'react';
import useToken from '@galvanize-inc/jwtdown-for-react';


function WaterList() {
    const { token } = useToken();
    const [waterList, setWaterList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if (token) {
            const waterURL = `${process.env.REACT_APP_MRQ_SERVICE}/api/water`;
            const fetchConfig = {
                method: "GET",
                headers: {
                    Authorization : `Bearer ${token}`,
            },
        };
            const response = await fetch(waterURL, fetchConfig);
            if (response.ok) {
                const data = await response.json()

                setWaterList(data)
            }

            }

        }

    fetchData();
  }, [token]);

    const deleteWater = async ({ target }) => {
        const delId = (target.id)
        const wateridUrl = `${process.env.REACT_APP_MRQ_SERVICE}/api/water/${target.id}`
        const fetchConfig = {
            method: "DELETE",
            headers: {
                 Authorization : `Bearer ${token}`,

            }

        };

        const response = await fetch (wateridUrl, fetchConfig);
        if (response.ok) {
            const filterUpdate = waterList.filter(function (currentElement) {
                return currentElement.id !== delId;
            })

            setWaterList(filterUpdate)
        }
    }



  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Fluid Oz.
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
        {waterList.map(water => {
            return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={water.id}>
                    <td className="px-6 py-4">{water.date}</td>
                    <td className="px-6 py-4">{water.ounces}</td>
                    <td className="px-6 py-4">
                        <button onClick={deleteWater} id={water.id}>
                            Delete
                        </button>
                    </td>
                </tr>
            );
        })}

        </tbody>
    </table>
</div>

  )
}

export default WaterList
