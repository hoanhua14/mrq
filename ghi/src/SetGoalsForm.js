import React, {useState} from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import StyledButton from "./ReactComponents/button";
import useGoal from "./hooks/useGoal";
import ExerciseForm from "./ExerciseForm";

export default function GoalsForm() {
    const { token } = useToken();
    const [category, setCategory] = useState('');
    const [exerciseGoal, setExerciseGoal] = useState('');
    const [sleepGoal, setSleepGoal] = useState('');
    const [waterGoal, setWaterGoal] = useState('');
    const {setEGoal, setSGoal, setWGoal} = useGoal();


    return (
        <>
            <div style={{ backgroundColor: '#e7f9f4'}} className="min-h-screen">
                <div className="row">
                        <div className="offset-3 md:flex md:flex-wrap md:justify-center " >
                            <div className="shadow p-4 mt-4" style={{ backgroundColor: '#c5f2e6' }}>
                            <h1 className="font-bold" >Let's set some goals for today!!</h1>
                            <form id="set-goals-form" >
                                <div className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-3">
                                    <label>Category</label>
                                    <div></div>
                                    <select
                                        onChange={e => setCategory(e.target.value)}
                                        className="form-select"
                                        value={category}
                                    >
                                        <option value="">Pick a category</option>
                                        <option>Move</option>
                                        <option>Rest</option>
                                        <option>Quench</option>

                                    </select>
                                </div>
                                {category === "Move" && (
                                <div className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-3">
                                    <label>Minutes</label>
                                    <input
                                    onChange={e => setExerciseGoal(e.target.value)}
                                    required type="number"
                                    value={exerciseGoal}
                                    className="form-control mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    >
                                    </input>
                                    <StyledButton onClick={e => setEGoal(exerciseGoal)} text="Set goal!"></StyledButton>
                                </div>
                                )}
                                {category === "Rest" && (
                                <div className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-3">
                                    <label>Hours</label>
                                    <input
                                    onChange={e => setSleepGoal(e.target.value)}
                                    required type="number"
                                    min="1"
                                    max="24"
                                    value={sleepGoal}
                                    className="form-control mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    >
                                    </input>
                                    <StyledButton text="Set goal!"></StyledButton>

                                </div>
                                )}
                                {category === "Quench" && (
                                <div className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-3">
                                    <label>Ounces</label>
                                    <input
                                    onChange={e => setWaterGoal(e.target.value)}
                                    required type="number"
                                    value={waterGoal}
                                    className="form-control mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    >
                                    </input>
                                    <StyledButton text="Set goal!"></StyledButton>

                                </div>
                                )}

                            </form>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};
