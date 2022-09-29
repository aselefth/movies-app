import React, {useRef} from "react";

export const usePagination = (totalResults: number, page: number, setPage: React.Dispatch<React.SetStateAction<number>>) => {

    const ref = useRef<HTMLDivElement>(null);

    const handlePreviousPage = () => {
        if (page < 2) return;
        setPage(prev => prev - 1);
        ref.current && ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
    const handleNextPage = () => {
        if (Math.ceil(totalResults / 10) === page ) return;
        setPage(prev => prev + 1);
        ref.current && ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    return {handlePreviousPage, handleNextPage, ref};
}