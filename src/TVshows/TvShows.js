import React from "react";
import { useParams } from "react-router-dom";

function TvShows() {
  const { id } = useParams();

  return <div>TvShows - {id}</div>;
}

export default TvShows;
