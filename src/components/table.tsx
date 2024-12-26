import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import Pagination from "./pagination";

const Table = () => {
  const [dataOfPage, setDataOfPage] = useState<any[]>([]);

  return (
    <>
      <div className="bg-slate-50">
        <table className="w-full">
          <tbody>
            <tr className="bg-slate-200  h-11 border-solid border-2 border-neutral-200  grid grid-cols-[10%_10%_70%_10%]">
              <th className="text-start text-lg font-thin p-0 pl-2.5">ID</th>
              <th className="text-start text-lg font-thin p-0">Name</th>
              <th className="text-start text-lg font-thin p-0">bugs</th>
              <th className="text-start text-lg font-thin p-0">Action</th>
            </tr>
            {dataOfPage?.map((bug: any, index: number) => {
              return (
                <tr
                  className="h-11 border-solid border-2 border-neutral-200 grid grid-cols-[10%_10%_70%_10%]"
                  key={index}
                >
                  <td className="p-0 pl-2.5">{bug.id}</td>
                  <td className="p-0">terminal 2</td>
                  <td className="p-0">{bug.title}</td>
                  <td className="p-0">
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
