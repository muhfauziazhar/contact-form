import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataTable from "./components/DataTable";
import InputForm from "./components/InputForm";
import Layout from "./Layout";
import { GlobalProvider } from "./GlobalContext";

const Router = () => {
    return (
        <BrowserRouter>
            <GlobalProvider>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <DataTable />
                            </Layout>
                        }
                    />
                    <Route
                        path="/contact/add"
                        element={
                            <Layout>
                                <InputForm />
                            </Layout>
                        }
                    />
                    <Route
                        path="/contact/edit/:id"
                        element={
                            <Layout>
                                <InputForm />
                            </Layout>
                        }
                    />
                </Routes>
            </GlobalProvider>
        </BrowserRouter>
    );
};

export default Router;
