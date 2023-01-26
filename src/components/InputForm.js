import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const InputForm = () => {
    const { state, handleFunction } = useContext(GlobalContext);
    const { input } = state;
    const { handleChange, handleSubmit } = handleFunction;

    return (
        <>
            <form onSubmit={handleSubmit} className="w-4/5 mx-auto mb-5">
                <div className="mb-6">
                    <input
                        value={input.name}
                        onChange={handleChange}
                        name="name"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukkan nama..."
                        required
                    />
                </div>
                <div className="mb-6">
                    <input
                        value={input.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukkan email..."
                        required
                    />
                </div>
                <div className="mb-6">
                    <input
                        value={input.subject}
                        onChange={handleChange}
                        name="subject"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukkan subject..."
                        required
                    />
                </div>
                <div className="mb-6">
                    <select
                        id="category"
                        value={input.category}
                        onChange={handleChange}
                        name="category"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="none">Pilih category...</option>
                        <option value="su">Support</option>
                        <option value="cs">Customer Service</option>
                        <option value="hr">Human Resource</option>
                    </select>
                </div>
                <div className="mb-6">
                    <textarea
                        value={input.message}
                        rows="4"
                        onChange={handleChange}
                        name="message"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukkan message..."
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default InputForm;
