import React, { useState } from "react";

const Images = () => {
  const handleClick = (id) => {
    const newData = [...data];

    newData.map((object) => {
      if (object.id === id) {
        object.downloads++;
      }
    });
    setData(newData);
  };
  const [isCarsVisible, setIsCarsVisible] = useState(true);
  const [isAnimalsVisible, setIsAnimalsVisible] = useState(true);
  const [isFlowersVisible, setIsFlowersVisible] = useState(true);
  const [data, setData] = useState([
    {
      id: 0,
      alt: "Mak",
      filename: "obraz1.jpg",
      category: 1,
      downloads: 35,
    },
    {
      id: 1,
      alt: "Bukiet",
      filename: "obraz2.jpg",
      category: 1,
      downloads: 43,
    },
    {
      id: 2,
      alt: "Dalmatyńczyk",
      filename: "obraz3.jpg",
      category: 2,
      downloads: 2,
    },
    {
      id: 3,
      alt: "Świnka morska",
      filename: "obraz4.jpg",
      category: 2,
      downloads: 53,
    },
    {
      id: 4,
      alt: "Rotwailer",
      filename: "obraz5.jpg",
      category: 2,
      downloads: 43,
    },
    {
      id: 5,
      alt: "Audi",
      filename: "obraz6.jpg",
      category: 3,
      downloads: 11,
    },
    {
      id: 6,
      alt: "kotki",
      filename: "obraz7.jpg",
      category: 2,
      downloads: 22,
    },
    {
      id: 7,
      alt: "Róża",
      filename: "obraz8.jpg",
      category: 1,
      downloads: 33,
    },
    {
      id: 8,
      alt: "Świnka morska",
      filename: "obraz9.jpg",
      category: 2,
      downloads: 123,
    },
    {
      id: 9,
      alt: "Foksterier",
      filename: "obraz10.jpg",
      category: 2,
      downloads: 22,
    },
    {
      id: 10,
      alt: "Szczeniak",
      filename: "obraz11.jpg",
      category: 2,
      downloads: 12,
    },
    {
      id: 11,
      alt: "Garbus",
      filename: "obraz12.jpg",
      category: 3,
      downloads: 321,
    },
  ]);

  return (
    <div className="container">
      <h1>Kategorie zdjęć</h1>
      <div className="d-flex gap-2">
        <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="flowers">
            Kwiaty
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            name="flowers"
            id="flowers"
            checked={isFlowersVisible}
            onChange={() => setIsFlowersVisible(!isFlowersVisible)}
          />
        </div>
        <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="Zwierzęta">
            Zwierzęta
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            name="animals"
            id="animals"
            checked={isAnimalsVisible}
            onChange={() => setIsAnimalsVisible(!isAnimalsVisible)}
          />
        </div>
        <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="cars">
            Samochody
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            name="cars"
            id="cars"
            checked={isCarsVisible}
            onChange={() => setIsCarsVisible(!isCarsVisible)}
          />
        </div>
      </div>
      <div className="d-flex flex-wrap gap-2">
        {data.map((object) => {
          if (object.category === 1 && isFlowersVisible) {
            return (
              <div key={object.id}>
                <img src={`./${object.filename}`} alt={object.alt} />
                <h4>Liczba pobrań: {object.downloads}</h4>
                <button
                  className="btn btn-success"
                  onClick={() => handleClick(object.id)}
                >
                  Pobierz
                </button>
              </div>
            );
          } else if (object.category === 2 && isAnimalsVisible) {
            return (
              <div key={object.id}>
                <img src={`./${object.filename}`} alt={object.alt} />
                <h4>Liczba pobrań: {object.downloads}</h4>
                <button
                  className="btn btn-success"
                  onClick={() => handleClick(object.id)}
                >
                  Pobierz
                </button>
              </div>
            );
          } else if (object.category === 3 && isCarsVisible) {
            return (
              <div key={object.id}>
                <img src={`./${object.filename}`} alt={object.alt} />
                <h4>Liczba pobrań: {object.downloads}</h4>
                <button
                  className="btn btn-success"
                  onClick={() => handleClick(object.id)}
                >
                  Pobierz
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Images;
