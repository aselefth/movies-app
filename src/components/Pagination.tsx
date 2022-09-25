import React from "react";

interface PaginationProps {
    page: number;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
}

export const Pagination:React.FC<PaginationProps> = ({page, handlePreviousPage, handleNextPage}) => {
    return (
        <div
            className={'flex gap-4 mt-4 pb-4'}
        >
            <button
                onClick={handlePreviousPage}
                className={'text-center px-3 py-1 bg-pink-900 text-white rounded-lg font-bold'}
            >
                {'<'}
            </button>
            <h1 className={'text-lg'}>{page}</h1>
            <button
                onClick={handleNextPage}
                className={'text-center px-3 py-1 bg-pink-900 text-white rounded-lg font-bold'}
            >
                {'>'}
            </button>
        </div>
    )
}