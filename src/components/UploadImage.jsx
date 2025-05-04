import { useState } from "react";

export default function ImageUploader({ setImage, image}) {
  // const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  
  const handleImageChange = (e) => {  
    const file = e.target.files[0];
    //esto tengo que mandar al back
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };
  
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {previewImage ? null : (
        <input type="file" accept="image/*" onChange={handleImageChange} />
      )}
      
      {previewImage ? <p>Vista previa de su imagen:</p> : null}
      {previewImage && (
        <img
          src={previewImage}
          alt="Imagen subida"
          style={{ width: "300px", height: "auto", borderRadius: "0.5rem" }}
        />
      )}
      <div>
        {previewImage && (
          <button
            onClick={() => setImage(null)}
            style={{
              width: "200px",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(8, 8, 8, 0.1)",
              objectFit: "contain",
              backgroundColor: "#27ae60",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1e8449")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#27ae60")}
          >
            Eliminar Imagen
          </button>
        )}
        {/* {image && (
          <button
            style={{
              width: "200px",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(8, 8, 8, 0.1)",
              objectFit: "contain",
              backgroundColor: "#2980b9",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1f618d")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2980b9")}
            
          >
            enviar foto
          </button>
        )} */}
      </div>
    </div>
  );
}
