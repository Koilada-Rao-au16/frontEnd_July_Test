import React, { useState } from "react";
import { useEffect } from "react";

export default function Apihook() {
  const [click, setClick] = useState(false);
  const [datas, setDatas] = useState([]);
  const [titles, setTitles] = useState([]);
  // state = {datas:[],
  //     titles: [],

  //   }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setTitles(data);
        console.log(titles);
      })
      .catch(console.log);
  });

  return (
    <>
      <div className="container" style={{ display: "flex", width: "50%" }}>
        <div className="col-xs-12">
          <ul>
            {titles.map((todo) => (
              <li key={todo.id}>
                <button
                  className="btn btn-primary waves-effect"
                  name={todo.id}
                  onClick={(e) => {
                    let id = e.target.name;

                    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
                      .then((res) => res.json())
                      .then((data) => {
                        setClick(true);
                        setDatas(data);

                        console.log(datas);
                      });
                  }}
                >
                  {" "}
                  Post Title {todo.id}{" "}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {click ? (
          <div class="row">
            <div className="col s12 m6" style={{ width: "50%" }}>
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title blue-text">{datas.title}</span>
                  <p>{datas.body}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="col s12 m6" style={{ width: "50%" }}>
            <h1>
              click on the post
              <br /> to display the content
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
