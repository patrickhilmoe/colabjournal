import { useState, useEffect } from 'react';
import axios from "axios";

export function StoryPage() {
    const [chapters, setChapters] = useState({
        title: '',
        body: ''
    });

    const handleChange = (event) => {
        setChapters({...chapters, [event.target.name]: event.target.value});
    }

    function handleForm(event) {
        event.preventDefault()
        console.log(chapters)
        axios.post("http://localhost:8080/chapters", {chapters})
        .then(response => console.log(response))
        .catch(err => console.log(err))
      };

    return (
        <>
        


        {/* CRUD for when server is up */}
        {/* <h1>Story Page</h1>
        <form onSubmit={handleForm}>
            <label htmlFor="title">Chapter Name</label>
            <input type="text" onChange={handleChange} name="title" placeholder="Chapter"/>
            <label htmlFor="body">Chapter Story</label>
            <input type="text" onChange={handleChange} id="body" name="body" placeholder="The Story" />
            <button type="submit">Add Chapter</button>
        </form>
        <button>Add Chapter</button> */}
        </>
    )
}
