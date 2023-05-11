import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./hero.css";
function Hero({ handleSumaary }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setUser(data));
  });
  return (
    <div style={{ backgroundColor: "Highlight" }}>
      <div>
        {user.map((users) => (
          <div className="card-detils">
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title style={{ paddingTop: "10px" }}>
                    user score :{users.score}
                  </Card.Title>
                  <Card.Title style={{ paddingTop: "10px" }}>
                    user name:{users.show.name}
                  </Card.Title>
                  <Card.Title style={{ paddingTop: "10px" }}>
                    user langauge:{users.show.language}
                  </Card.Title>
                  <Card.Title style={{ paddingTop: "10px" }}>
                    user type:{users.show.type}
                  </Card.Title>
                  <Button
                    variant="primary"
                    style={{ marginTop: "10px" }}
                    onClick={handleSumaary}
                  >
                    Summary
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
