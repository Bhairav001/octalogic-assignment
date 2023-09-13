import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMusicDetailsAPI, getMusicDetailsAPI } from "../store/action";
// import EditDetails from "./EditDetails";

const Table = () => {
  const {
    data,
    movie: { loading, error },
  } = useSelector((state) => state);

  let dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log("id", id);
    dispatch(deleteMusicDetailsAPI(id));
  };

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getMusicDetailsAPI());
    }
  }, [data]);

  return (
    <div className="pb-8">
      <div className="max-w-screen-xl mx-auto bg-white shadow-md rounded-md">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-2">Id</th>
              <th className="p-2">Name</th>
              <th className="p-2">Distriction</th>
              <th className="p-2">Instructor</th>
              <th className="p-2">Intrument</th>
              <th className="p-2">Day of week</th>
              <th># of students</th>
              <th>Price</th>
              <th>Status</th>
              <th className="p-2">Edit</th>
              <th className="p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((el, i) => (
                <tr className="hover:bg-gray-100" key={i}>
                  <td className="p-2">{el.id}</td>
                  <td className="p-2">{el.title}</td>
                  <td className="p-2">{el.director}</td>
                  <td className="p-2">{el.year}</td>
                  <td className="p-2">{el.genre}</td>
                  <td className="p-2">{el.IMDB_Rating}</td>
                  {/* <td className="p-2">
                    <EditDetails element={el} />
                  </td> */}
                  <td className="p-2">
                    <button
                      className="px-2 py-1 text-sm text-red-500"
                      title="delete"
                      onClick={() => handleDelete(el.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
