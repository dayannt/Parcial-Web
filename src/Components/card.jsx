import { useEffect, useState } from "react";
import { DigimonCard } from "./DigimondCard";

export const Card = () => {

   const [list, setList] = useState([]);          
   const [name, setName] = useState("");          
   const [image, setImage] = useState("");        
    const [error, setError] = useState(null);      

  useEffect(() => {                              

    const getDigimon = async () => {
      try {
        const res = await fetch("https://digi-api.com/api/v1/digimon?pageSize=10");
        const data = await res.json();        
        setList(data.content);
      } catch (err) {
        setError("Error, cargando");
      }
    };
    getDigimon();
  }, []);

  const createDigi = (e) => {
    e.prenentDefault();
    setDigi([ ...digi, {name: name, image: image}]) 
  }

  const deleteDigimon = (id) => {
    const digifiltered = digi.filter
  }


   



  return (

    <>

      <h1>Digimons</h1>

      <form>

        <input
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Imagen URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button>
          Agregar
        </button>

      </form>

      {error && <p>{error}</p>}

      <div>
        {list.map((digimon, index) => {
            return (
          <DigimonCard
            key={index}
            name={digimon.name}
            image={digimon.image}
            index={index}
          />)
})}

      </div>

    </>

  );

};