import React, { useState } from "react";

function App() {
  const [penilaian, setPenilaian] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  const handleInputChange = (event, aspek, mahasiswa) => {
    const value = event.target.value;
    setPenilaian((prevState) => ({
      ...prevState,
      [aspek]: {
        ...prevState[aspek],
        [`Mahasiswa_${mahasiswa}`]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(penilaian);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>Mahasiswa</th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, index) => (
            <tr key={index}>
              <td>Mahasiswa {index + 1}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={
                    penilaian.aspek_penilaian_1[`Mahasiswa_${index + 1}`] || ""
                  }
                  onChange={(event) =>
                    handleInputChange(event, "aspek_penilaian_1", index + 1)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={
                    penilaian.aspek_penilaian_2[`Mahasiswa_${index + 1}`] || ""
                  }
                  onChange={(event) =>
                    handleInputChange(event, "aspek_penilaian_2", index + 1)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={
                    penilaian.aspek_penilaian_3[`Mahasiswa_${index + 1}`] || ""
                  }
                  onChange={(event) =>
                    handleInputChange(event, "aspek_penilaian_3", index + 1)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={
                    penilaian.aspek_penilaian_4[`Mahasiswa_${index + 1}`] || ""
                  }
                  onChange={(event) =>
                    handleInputChange(event, "aspek_penilaian_4", index + 1)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit">Simpan</button>
    </form>
  );
}

export default App;
