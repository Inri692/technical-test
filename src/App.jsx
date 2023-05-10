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
    <div className="w-full h-screen flex justify-center bg-[#e2e8f0]">
      <div className="items-center mt-36 ">
        <form onSubmit={handleSubmit}>
          <table className="border-4 border-indigo-500/75 ">
            <thead>
              <tr className="font-bold text-2xl ">
                <th className="border-4 border-indigo-500/50">Mahasiswa</th>
                <th className="border-4 border-indigo-500/50 w-40">
                  Aspek Penilaian 1
                </th>
                <th className="border-4 border-indigo-500/50 w-40">
                  Aspek Penilaian 2
                </th>
                <th className="border-4 border-indigo-500/50 w-40">
                  Aspek Penilaian 3
                </th>
                <th className="border-4 border-indigo-500/50 w-40">
                  Aspek Penilaian 4
                </th>
              </tr>
            </thead>
            <tbody className="">
              {[...Array(10)].map((_, index) => (
                <tr key={index}>
                  <td className="border-4 border-indigo-500/50">
                    Mahasiswa {index + 1}
                  </td>
                  <td className="border-4 border-indigo-500/50">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      className="rounded-lg bg-[#cbd5e1] border-2 focus:outline-none text-black w-full"
                      value={
                        penilaian.aspek_penilaian_1[`Mahasiswa_${index + 1}`] ||
                        ""
                      }
                      onChange={(event) =>
                        handleInputChange(event, "aspek_penilaian_1", index + 1)
                      }
                    />
                  </td>
                  <td className="border-4 border-indigo-500/50">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      className="rounded-lg bg-[#cbd5e1] border-2 focus:outline-none text-black w-full"
                      value={
                        penilaian.aspek_penilaian_2[`Mahasiswa_${index + 1}`] ||
                        ""
                      }
                      onChange={(event) =>
                        handleInputChange(event, "aspek_penilaian_2", index + 1)
                      }
                    />
                  </td>
                  <td className="border-4 border-indigo-500/50">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      className="rounded-lg bg-[#cbd5e1] border-2 focus:outline-none text-black w-full"
                      value={
                        penilaian.aspek_penilaian_3[`Mahasiswa_${index + 1}`] ||
                        ""
                      }
                      onChange={(event) =>
                        handleInputChange(event, "aspek_penilaian_3", index + 1)
                      }
                    />
                  </td>
                  <td className="border-4 border-indigo-500/50">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      className="rounded-lg bg-[#cbd5e1] border-2 focus:outline-none text-black w-full"
                      value={
                        penilaian.aspek_penilaian_4[`Mahasiswa_${index + 1}`] ||
                        ""
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
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-black text-white rounded-full w-44"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
