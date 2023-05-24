import { useState, useEffect } from "react";

export default function SleepList() {
    const [sleeps, setSleeps] = useState([]);
    const fetchSleeps = async () => {
        const url = 'http://localhost:8080/api/sleep/all/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const allSleeps = data.sleeps;
            setSleeps(allSleeps);
        }
    }
     useEffect(() => {
        fetchSleeps();
    }, []);
    return (
        <>
            <div className="font-weight-bold">All Sleeps</div>
            <table className="table table-striped">
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
                        </tr>
                    )
                })}

                </tbody>
            </table>

        </>
    )

}
