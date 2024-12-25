import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { getData } from "../services/data";

interface PaginationProps {
  setCurrentItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const Pagination: React.FC<PaginationProps> = ({ setCurrentItems }) => {
  const [bugs, setBugs] = useState([]);
  const [itemOffSet, setItemOffSet] = useState(0);
  const itemsPerPage = useRef(10);
  const pageCount = bugs.length / itemsPerPage.current;

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

  useEffect(() => {
    const endOffset = itemOffSet + itemsPerPage.current;
    const currentItems = bugs?.slice(itemOffSet, endOffset);
    setCurrentItems(currentItems);
  }, [itemOffSet, bugs, setCurrentItems]);

  const pageChange = (event: { selected: number }) => {
    const newOffSet = (event.selected * itemsPerPage.current) % bugs.length;
    setItemOffSet(newOffSet);
  };

  return (
    <>
      <ReactPaginate
        pageCount={pageCount}
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        onPageChange={pageChange}
        pageRangeDisplayed={3}
      />
    </>
  );
};

export default Pagination;
