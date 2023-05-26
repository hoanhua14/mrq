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

  const deleteSleep = async ({target}) => {
    const deleteID = (target.id);
    const sleepUrl = `${process.env.REACT_APP_MRQ_SERVICE}/api/sleep/${target.id}`
    const fetchConfig = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await fetch (sleepUrl, fetchConfig);
    if (response.ok) {
        const updateList = sleeps.filter(function (currentElement) {
            return currentElement.id != deleteID;
        })
        setSleeps(updateList);
    }
  }

    return (
        <>
            <div className="font-weight-bold">All Sleeps</div>

                <table >
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Hours</td>
                            <td>Quality</td>
                        </tr>
                    </thead>
                    <tbody>
                    {sleeps?.map((sleep) => {
                        return (
                            <tr key={sleep.id}>
                                <td>{sleep.date}</td>
                                <td>{sleep.hours}</td>
                                <td>{sleep.quality}</td>
                                <td className="px-6 py-4">
                                    <button onClick={deleteSleep} id={sleep.id}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>

        </>
    )

}
