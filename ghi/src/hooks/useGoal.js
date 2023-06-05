import { useState, useEffect } from "react";

export default function useGoal() {
    const [eGoal, setEGoal] = useState(0);
    const [sGoal, setSGoal] = useState(0);
    const [wGoal, setWGoal] = useState(0);
    console.log(eGoal)
    return {
        eGoal,
        setEGoal,
        sGoal,
        setSGoal,
        wGoal,
        setWGoal
    }

}
