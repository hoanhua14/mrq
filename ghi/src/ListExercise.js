import React, { useEffect, useState } from 'react';
import useToken from '@galvanize-inc/jwtdown-for-react';


function ExerciseList() {
    const { token } = useToken();
    const [exerciseList, setExerciseList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if (token) {
            const exerciseURL = `${process.env.REACT_APP_MRQ_SERVICE}/api/exercise`;
            const fetchConfig = {
                method: "GET",
                headers: {
                    Authorization : `Bearer ${token}`,
            },
        };
            const response = await fetch(exerciseURL, fetchConfig);
            if (response.ok) {
                const data = await response.json()

                setExerciseList(data)
            }

            }

        }

    fetchData();
  }, [token]);

    const deleteExercise = async ({ target }) => {
        const delId = (target.id)
        const exerciseurl = `${process.env.REACT_APP_MRQ_SERVICE}/api/exercise/${target.id}`
        const fetchConfig = {
            method: "DELETE",
            headers: {
                 Authorization : `Bearer ${token}`,

            }

        };

        const response = await fetch (exerciseurl, fetchConfig);
        if (response.ok) {
            const filterUpdate = exerciseList.filter(function (currentElement) {
                return currentElement.id != delId;
            })

            setExerciseList(filterUpdate)
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
                    Minutes
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
        {exerciseList.map(exercise => {
            return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={exercise.id}>
                    <td className="px-6 py-4">{exercise.date}</td>
                    <td className="px-6 py-4">{exercise.minutes}</td>
                    <td className="px-6 py-4">{exercise.category}</td>
                    <td className="px-6 py-4">
                        <button onClick={deleteExercise} id={exercise.id}>
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

export default ExerciseList
