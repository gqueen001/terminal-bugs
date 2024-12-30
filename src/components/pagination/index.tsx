import { FC, useEffect, useState } from "react";
import { getData } from "../../services/data";
import { usePagination } from "./usePagination";
import { IoMdArrowForward } from "react-icons/io";

import { IoMdArrowBack } from "react-icons/io";

interface paginationType {
  setDataOfPage: any;
}

const Pagination: FC<paginationType> = ({ setDataOfPage }) => {
  const [bugs, setBugs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<any>(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      try {
        setBugs(response.data);
      } catch (error) {
        console.log("it is error");
      }
    };

    fetchData();
  }, []);

  const pages: any[] = [];
  const dataOfPerPage: number = 10;
  const totalPage: number = bugs.length / dataOfPerPage;

  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  useEffect(() => {
    const lastPageIndex = currentPage * dataOfPerPage;
    const firstPageIndex = lastPageIndex - dataOfPerPage;
    setDataOfPage(bugs.slice(firstPageIndex, lastPageIndex));
  }, [currentPage, bugs]);

  const paginationLength: any = usePagination({
    currentPage,
    bugs,
    dataOfPerPage,
    totalPage,
  });

  return (
    <>
      <div className="flex align-center justify-between  m-2.5">
        <div
          onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
          className={
            paginationLength.length > 0
              ? "flex cursor-pointer text-gray-700 font-medium border-solid border-2 border-gray-200 rounded-lg w-28 h-8 justify-center items-center gap-2.5"
              : "hidden"
          }
        >
          <IoMdArrowBack />
          Previous
        </div>
        <div className="flex gap-8">
          {paginationLength?.map((page: any, index: number) => {
            if (page === "...") {
              return <div key={index}>&#8230;</div>;
            }
            return (
              <button
                className={
                  currentPage === page
                    ? "bg-indigo-100 w-8 rounded-lg text-indigo-950"
                    : "none"
                }
                key={index}
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {page}
              </button>
            );
          })}
        </div>
        <div
          onClick={() =>
            currentPage !== totalPage && setCurrentPage(currentPage + 1)
          }
          className={
            paginationLength.length > 0
              ? "flex cursor-pointer text-gray-700 font-medium border-solid border-2 border-gray-200 rounded-lg w-28 h-8 justify-center items-center gap-2.5"
              : "hidden"
          }
        >
          Next <IoMdArrowForward />
        </div>
      </div>
    </>
  );
};

export default Pagination;
