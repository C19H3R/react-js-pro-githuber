import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";
import axios from "axios";

function Repos({ repos_url }) {
  const [repos, setRepos] = useState([]);
  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div className="text-primary">{repo.name}</div>
          <div className="text-dark">{repo.language}</div>
          <div className="text-primary">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default Repos;
