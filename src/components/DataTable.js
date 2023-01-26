import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const DataTable = () => {
    const { state, handleFunction } = useContext(GlobalContext);
    const { contacts } = state;
    const { handleEdit, handleDelete } = handleFunction;
    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    return (
        <>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-violet-400 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-3">
                                No
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Aksi
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Nama
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Subject
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Category
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Message
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts !== null &&
                            contacts.map((res, index) => {
                                return (
                                    <tr
                                        key={index + 1}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
                                    >
                                        <td className="py-2 px-3 ">{index + 1}</td>
                                        <td className="py-2 px-3">
                                            <button
                                                value={res.id}
                                                onClick={handleEdit}
                                                className="bg-yellow-200 hover:bg-yellow-400 text-white font-bold py-2 px-6 rounded-full m-2"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                value={res.id}
                                                onClick={handleDelete}
                                                className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full m-2"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                        <th className="py-2 px-3 ">{res.name}</th>
                                        <td className="py-2 px-3">{res.email}</td>
                                        <td className="py-2 px-3">{res.subject}</td>
                                        <td className="py-2 px-3">{res.category}</td>
                                        <td className="py-2 px-3">{res.message}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default DataTable;
