import React, { useEffect, useState } from "react";
import Note from "./Note";
import CustomError from "../error";
import Loading from "../loading";
import { useFetch } from "../../custom_hooks/UseFetch";

export const notesContext = React.createContext();

const url = "https://jsonplaceholder.typicode.com/posts";
const Notes = () => {
  const { data, isLoading, isError, errorMsg } = useFetch(url);
  return (
    <notesContext.Provider value={data}>
      <>
        {isError && <CustomError error={errorMsg} />}
        {isLoading ? (
          <Loading />
        ) : (
          data.map((dt) => {
            //console.log(dt, "---xxx>");
            return <Note key={dt.id} {...dt} />;
          })
        )}
      </>
    </notesContext.Provider>
  );
};
export default Notes;
