import React, { useContext, useState } from "react";
import Axios from "axios";
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setquery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log(user);
    } catch (error) {
      toast("USER NOT FOUND!!", { type: "error" });
    }
  };
  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  } else {
    return (
      <Container>
        <Row className="mt-3">
          <Col md="5">
            <InputGroup>
              <Input
                type="text"
                value={query}
                placeholder="Please provide the username"
                onChange={(e) => setquery(e.target.value)}
              />
              <InputGroupAddon addonType="append">
                <Button color="primary" onClick={fetchDetails}>
                  Fetch User
                </Button>
              </InputGroupAddon>
            </InputGroup>
            {user ? <UserCard user={user} /> : null}
          </Col>
          <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
        </Row>
      </Container>
    );
  }
};

export default Home;
