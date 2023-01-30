import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    let navigate = useNavigate();
    const initialState = JSON.parse(localStorage.getItem("contacts")) || [];
    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
    });
    const [contacts, setContacts] = useState(initialState);
    const [currentId, setCurrentId] = useState(-1);

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = (values) => {
        let { name, email, subject, category, message } = values;

        if (currentId === -1) {
            setContacts([...contacts, { id: uuidv4(), name, email, subject, category, message }]);
            localStorage.setItem("contacts", JSON.stringify(contacts));
        } else {
            let user = contacts.find((contact) => contact.id === currentId);
            user.name = name;
            user.email = email;
            user.subject = subject;
            user.category = category;
            user.message = message;
            localStorage.setItem("contacts", JSON.stringify(contacts));
        }

        setInput({
            name: "",
            email: "",
            subject: "",
            category: "",
            message: "",
        });

        setCurrentId(-1);
        navigate("/");
    };

    const handleEdit = (event) => {
        let idContact = event.target.value;
        setCurrentId(idContact);
        navigate(`/contact/edit/${idContact}`);
        const findContact = contacts.find((contact) => contact.id === idContact);
        setInput({
            name: findContact.name,
            email: findContact.email,
            subject: findContact.subject,
            category: findContact.category,
            message: findContact.message,
        });
    };

    const handleDelete = (event) => {
        let idContact = event.target.value;
        setContacts(contacts.filter((contact) => contact.id !== idContact));
    };

    const state = {
        input,
        setInput,
        contacts,
        setContacts,
        currentId,
        setCurrentId,
    };

    const handleFunction = {
        handleChange,
        handleSubmit,
        handleEdit,
        handleDelete,
    };

    return <GlobalContext.Provider value={{ state, handleFunction }}>{props.children}</GlobalContext.Provider>;
};
