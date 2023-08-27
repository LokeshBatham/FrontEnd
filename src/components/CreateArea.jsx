import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import axios from "axios";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    const data = note
    // const headers = {}
    console.log(data);
    var myHeaders = new Headers();
    const title = note.title
    const content = note.content 

    myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //     title : title,
    //     content : content,

    // });

    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    // };

    // fetch("http://localhost:4000/addnote", requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => {
    //   console.log(result)
    //   })
    //   .catch((error) => { });


    const  config = {
      headers: {
        'Content-Type': 'application/json'
    }
    }
    axios.post("http://localhost:8000/addnote", 
    {
      title : title,
      content : content,
    },  config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("err",err);
      console.log("err",err);
      console.log("err",err);
    })

    // fetch('https://942f-202-142-122-242.ngrok-free.app/addnote', {
    //   method: 'post',
    //   headers: {'Content-Type':'application/json'},
    //   body: {
    //     data
    //   }
    //  });
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
