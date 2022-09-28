import React from "react";
import {useInput} from "../hooks/useInput";
import {useNavigate} from "react-router-dom";

export const Search: React.FC = () => {
    const {value, handleValueChange: onSearchChange} = useInput();
    const navigate = useNavigate();

    return (
        <div
            className={'flex flex-col items-center gap-4 mt-4'}
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    navigate(`/:${value}`)
                }}
            >
                <input
                    value={value}
                    onChange={onSearchChange}
                    className={'outline-none border p-2 mr-[-1px] rounded'}
                />
                <button
                    type={'submit'}
                    className={'px-4 py-3 bg-amber-400 rounded'}
                >
                    find
                </button>
            </form>

        </div>
    )
}