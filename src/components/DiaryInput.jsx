import { useEffect, useState } from "react";
import router from "../router/router";
import { service } from "../services/api";

export default function DiaryInput({setEntry,entry  }) {
  // const [entry, setEntry] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userType") === "consultant") {
      router.navigate("/home");
    }
  }, []);

  // const handleSubmit = (e) => {
    // e.preventDefault();
    // if (entry.trim() === "") return;
    // service
    //   .writeDiary(JSON.parse(localStorage.getItem("user")).userId, entry)
    //   .then((response) => {
    //     console.log(response);
    //   });
    // setEntry("");
  // };

  return (
    // <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <textarea
        required
        placeholder="Escribe tu entrada aquí..."
        value={entry}
        title="Escribe como fue tu día (obligatorio)"
        onChange={(e) => {
          setEntry(e.target.value);
          //onSubmit(entry);
        }}

        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          height: "280px",
          resize: "none",
        }}
      />
    // </form>
  );
}
