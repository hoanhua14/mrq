import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";


export default function SleepList() {
    const { token } = useToken();
    const [sleeps, setSleeps] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if (token) {
            const sleepURL = `${process.env.REACT_APP_MRQ_SERVICE}/api/sleep`;
            const fetchConfig = {
                method: "GET",
                headers: {
                    Authorization : `Bearer ${token}`,
            },
        };
            const response = await fetch(sleepURL, fetchConfig);
            if (response.ok) {
                const data = await response.json()

                setSleeps(data)
            }
            }
        }

    fetchData();
  }, [token]);

  const deleteSleep = async (target) => {
    const deleteID = (target);
    const sleepUrl = `${process.env.REACT_APP_MRQ_SERVICE}/api/sleep/${target}`
    const fetchConfig = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await fetch (sleepUrl, fetchConfig);
    if (response.ok) {
        const updateList = sleeps.filter(function (currentElement) {
            return currentElement.id !== deleteID;
        })
        setSleeps(updateList);
    }
  }

    return (
        <>
            <div>
                <table style={{ backgroundColor: '#e7f9f4'}} className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
                    <thead className="whitespace-nowrap px-4 py-2 font-medium font-bold text-gray-900">
                        <tr >
                            <td>Date</td>
                            <td>Hours</td>
                            <td>Quality</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {sleeps?.map((sleep) => {
                        return (
                            <tr key={sleep.id}>
                                <td>{sleep.date}</td>
                                <td>{sleep.hours}</td>
                                <td>{sleep.quality}</td>
                                <td className="px-6 py-4">
                                    <button onClick={() => deleteSleep(sleep.id)} className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
    title="Delete">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                            >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
            </div>
        </>
    )

}
