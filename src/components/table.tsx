import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import Pagination from "./pagination/index";
import Header from "./header";

const Table = () => {
  const [dataOfPage, setDataOfPage] = useState<any[]>([]);

  return (
    <>
      <Header />
      <div className="bg-slate-50 border-solid border-2 border-gray-200 rounded-lg">
        <table className="w-full">
          <tbody>
            <tr className="bg-slate-200 items-center h-11 border-solid border-b-2 border-neutral-200  grid grid-cols-[10%_25%_50%_10%] gap-5">
              <th className="text-start text-sm font-light p-0 pl-2.5">ID</th>
              <th className="text-start text-sm font-light p-0">Name</th>
              <th className="text-start text-sm font-light p-0">bugs</th>
              <th className="text-start text-sm font-light p-0 m-auto">
                Action
              </th>
            </tr>
            {dataOfPage?.map((bug: any, index: number) => {
              return (
                <tr
                  className="h-11 grid grid-cols-[10%_25%_50%_10%] gap-5 items-center border-solid border-b-2 border-gray-200"
                  key={index}
                >
                  <td className="p-0 pl-2.5">{bug.id}</td>
                  <td className="p-0">terminal 2</td>
                  <td className="p-0">{bug.title}</td>
                  <td className="p-0 m-auto">
                    <RiDeleteBinLine />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination setDataOfPage={setDataOfPage} />
      </div>
    </>
  );
};

export default Table;
