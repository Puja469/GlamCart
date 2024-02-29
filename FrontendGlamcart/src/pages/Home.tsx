import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DefaultLayout from "../components/layouts/default-layout";
import Product from "./Product";
import Loader from "../components/UI/loader";

import { trackWindowScroll } from "react-lazy-load-image-component";
import FeaturedProducts from "./popularProduct";




const HomePage:React.FC= () => {
  



  return (
    <DefaultLayout title='GlamCart'>
      <Container>
      <h1 className={"md:text-4xl text-2xl gilroy-bold"}>Featured Products</h1>
        <FeaturedProducts/>
          <Row md={3} xs={1} lg={3}>
          </Row>
      </Container>
    </DefaultLayout>
  );
};

export default trackWindowScroll(HomePage);
