import { ChangeEvent, FC, useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { getData } from "../../services/data";

interface paginationType {
  setDataOfPage: any;
}

interface DataItem {
  id: string;
  name: string;
}

const Search: FC<paginationType> = ({ setDataOfPage }) => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        setData(response.data);
      } catch (error) {
        console.log("it is error");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item?.id?.toString().includes(search)
    );
    setDataOfPage(filteredData);
  }, [search, data, setDataOfPage]);
  return (
    <>
      <div className="flex justify-end">
        <div className=" flex items-center gap-2 m-2.5 h-10 min-w-40 w-1/4 p-1.5 rounded-lg border-solid border-2 border-gray-200">
          <GoSearch />
          <input
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSearch(event.currentTarget.value)
            }
            type="search"
            placeholder="Search"
            className="w-full focus-visible: outline-none placeholder-gray-500 text-gray-500 bg-transparent font-normal text-xs"
          />
        </div>
      </div>
    </>
  );
};

export default Search;
