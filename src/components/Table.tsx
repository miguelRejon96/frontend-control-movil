import { FC, ReactNode } from "react";
import { TextTitle } from "./Text";

type iProps = {
  headers: string[];
  children: ReactNode;
};

const Table: FC<iProps> = (props) => {
  return (
    <div className="mt-3 w-full">
      <div className="relative overflow-x-auto">
        <table className="w-full   text-sm text-left text-gray-500">
          <thead className="text-xs rounded-lg text-gray-500 uppercase bg-gray-100">
            <tr className="">
              {props.headers.map((header, index) => (
                <th key={index} className="py-3 px-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{props.children}</tbody>
        </table>
      </div>
    </div>
  );
};

const Tables = () => {
  const testFunction = () => {
    console.log("first");
  };
  return (
    <div>
      <TextTitle text="Tables" />

      <Table headers={["Folio", "Estatus", "Nombre"]}>
        <tr
          onClick={() => testFunction()}
          className="border border-dashed cursor-pointer hover:bg-gray-400 text-gray-900 hover:text-white dark:text-white"
        >
          <td className="p-2 font-medium text-xs">CG-341</td>
          <td className="p-2 font-medium text-xs ">CG-341</td>
          <td className="p-2 font-medium text-xs">CG-341</td>
        </tr>
        <tr className="border-b border-dashed cursor-pointer hover:bg-gray-400 text-gray-900 hover:text-white dark:text-white">
          <td className="p-2 font-medium text-xs">CG-341</td>
          <td className="p-2 font-medium text-xs ">CG-341</td>
          <td className="p-2 font-medium text-xs">CG-341</td>
        </tr>
      </Table>
    </div>
  );
};
export { Table, Tables };
