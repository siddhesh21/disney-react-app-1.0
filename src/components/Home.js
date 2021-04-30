import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import Recommendations from "./Recommendations";
import Originals from "./Originals";
import Trending from "./Trending";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import { setMovies } from "../features/movie/movieSlice";
import db from "../firebase";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommendations = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommendations);
        // eslint-disable-next-line
        switch (doc.data().type) {
          case "recommendations":
            // eslint-disable-next-line
            recommendations = [
              ...recommendations,
              { id: doc.id, ...doc.data() },
            ];
            break;

          case "new":
            // eslint-disable-next-line
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            // eslint-disable-next-line
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            // eslint-disable-next-line
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommendations: recommendations,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommendations />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
