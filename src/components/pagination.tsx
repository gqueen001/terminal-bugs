import { FC, useEffect, useState } from "react";
import { getData } from "../services/data";

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

  return (
    <>
      {pages.map((page: number) => {
        return (
          <button key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </>
  );
};

export default Pagination;
