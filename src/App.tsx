import React from 'react';
import {Col as AntdCol, Row, Typography, Button as AntdButton, BackTop, Carousel} from "antd";
import {CaretUpOutlined} from "@ant-design/icons"
import styled from "styled-components";

import ScispacyLogo from "./img/scispacy-logo.png";
import ScispacyDemo from "./img/scispacyDemo.png";
import ScispacyLinking from "./img/scispacyLinking.png";

import AllennlpWebsite from "./img/allennlpWebsite.png";
import AllennlpDemo from "./img/allennlpDemo.png";

import ElmoResults from "./img/elmoResults.png";
import ElmoImage from "./img/elmoImage.png";

import AutocatWebsite from "./img/autocat.png";
import AutocatResult from "./img/autocatResult.png";

import PawlsInterface from "./img/pawlsInterface.png";
import PawlsRelations from "./img/pawlsRelations.png";

import Nhs0 from "./img/nhs0.png";
import Nhs1 from "./img/nhs1.png";


const BigTitle = styled.h1`
font-size: 6rem;
padding-top: 100px;
margin-bottom: 20px;
font-weight: bold;
/* 
When the width is less than 720px (bootstrap md), scale the font size
with respect to the view port.
 */
@media all and (max-width: 720px) {
  font-size: 8vw;
  text-align: center
}

`;

const Padding = styled.div`
padding: 120px;
`;
const SmallPadding = styled.div`
padding: 60px;
`;

const Centered = styled.div`
    padding-left: 120px;
    padding-right: 120px;
    margin: 0 auto;
    min-height: 700px;

    @media all and (max-width: 720px) {
      padding-left: 20px;
      padding-right: 20px;
    }

`;

const Button = styled(AntdButton)`

    margin-right: 8px
`


const leftColumnProps = {
  md: {
    span: 8
  },
  sm: {
    span:24
  },
  xs: {
    span:24
  },
  lg: {
    span: 6,
  },

}
const rightColumnProps = {
  md: {
    span: 14,
    offset: 2
  },
  lg: {
    span: 10,
    offset: 2
  },
  sm: {
    span: 24,
    offset: 0
  },
  xs: {
    span: 24,
    offset: 0
  }
}
const titleColumnProps = {
  lg: {
    span: 12,
    offset: 0
  },
  md: {
    span: 16,
    offset: 0
  },
  sm: {
    span: 24,
    offset: 0
  },
  xs: {
    span: 24,
    offset: 0
  }
}


/* 
When the width is less than 720px (bootstrap md), center
the column and slightly pad the bottom.
*/
const Col = styled(AntdCol)`
    @media all and (max-width: 720px) {
      text-align: center;
      padding-bottom: 20px;
    }
`


const App: React.FC = () => {
  return (
    <React.Fragment>
      <BackTop>
      <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>
        <CaretUpOutlined style={{ fontSize: '60px'}}/>
      </strong>
      </BackTop>

      <Centered>
      <Row gutter={16} >
        <Col {...titleColumnProps}>
          <BigTitle>
            Mark Neumann.
          </BigTitle>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col {...titleColumnProps}>
        <Typography.Title type="secondary" level={3}>

          I'm a researcher and engineer interested in natural language processing, neural networks and interactive machine learning.
          I'm interested in NLP systems that work in real life.
        </Typography.Title>
        <Typography.Title type="secondary" level={3}>
          Previously I was a Senior Research Engineer at the 
          <a href="https://allenai.org/" target="_blank" rel="noopener noreferrer"> Allen Institute for Artificial Intelligence. </a>
          I co-created
          <a href="https://allennlp.org/" target="_blank" rel="noopener noreferrer"> AllenNLP</a>
          , a library for Natural Language Processing research, focused on neural networks.
        </Typography.Title>

        <Typography.Title level={4}>
          <a href="mailto:mark.neumann.1992@gmail.com" target="_top" rel="noopener noreferrer">Email. </a>
          <a href="https://twitter.com/MarkNeumannnn" target="_blank" rel="noopener noreferrer"> Twitter. </a>
          <a href="https://github.com/DeNeutoy" target="_blank" rel="noopener noreferrer"> Github. </a>
          <a href="http://markneumann.xyz/blog" target="_blank" rel="noopener noreferrer"> Blog. </a>
          <a href={process.env.PUBLIC_URL + "/cv.pdf"} download> CV. </a>
        </Typography.Title>
        </Col>
      </Row>

      <SmallPadding/>    
      <Row gutter={16} justify="start" align="middle">
        <Col {...leftColumnProps}>
          <Typography.Title>
            AllenNLP
          </Typography.Title>
          <Typography.Paragraph strong>
           AllenNLP is an open-source NLP research library, built on PyTorch.
           It contains many useful abstrations for Deep Learning + NLP, as well as a
           first class declarative JSON configuration specification for reproducible experiments.
          </Typography.Paragraph>
          <Button type="primary" href="https://allennlp.org" target="_blank">
            Install the library
          </Button>
          <Button type="primary" href="https://arxiv.org/abs/1803.07640" target="_blank">
            Paper
          </Button>
        </Col>
        <Col {...rightColumnProps}>
          <Carousel autoplay speed={300} effect="fade" dots={false}>
            <img src={AllennlpWebsite} alt="allennlp logo" width={800}></img>
            <img src={AllennlpDemo} alt="allennlp demo" width={800}></img>
          </Carousel>
        </Col>
      </Row>

      <Padding/>    
      <Row gutter={16} justify="start" align="middle">
        <Col {...leftColumnProps}>
          <Typography.Title>
            Elmo
          </Typography.Title>
          <Typography.Paragraph strong>
            Elmo (Embeddings from Language Models) is a popular representation learning method 
            for embedding words in context. It began a trend of deep contextualised word 
            representation learning in NLP, such as BERT.

          </Typography.Paragraph>
          <Button type="primary" href="https://arxiv.org/abs/1802.05365" target="_blank">
            Read the paper
          </Button>
        </Col>
        <Col {...rightColumnProps}>
          <Carousel autoplay speed={300} effect="fade" dots={false}>
            <img src={ElmoImage} alt="elmo" width={800}></img>
            <img src={ElmoResults} alt="elmo results" width={800}></img>
          </Carousel>
        </Col>
      </Row>

      <Padding/>    
      <Row gutter={16} justify="start" align="middle">
        <Col {...leftColumnProps}>
          <Typography.Title>
            SciSpaCy
          </Typography.Title>
          <Typography.Paragraph strong>
           ScispaCy is a Spacy pipeline for processing English Biomedical text. It contains
           models for custom tokenisation, POS Tagging, NER, Entity Linking and Syntactic Parsing.
           Scispacy is open source and freely available, with a public demo.

          </Typography.Paragraph>
          <Button type="primary" href="https://allenai.github.io/scispacy/" target="_blank">
            Install the library
          </Button>
          <Button type="primary" href="https://arxiv.org/abs/1902.07669" target="_blank">
            Paper
          </Button>
        </Col>
        <Col {...rightColumnProps}>
          <Carousel autoplay speed={300} effect="fade" dots={false}>
            <img src={ScispacyLogo} alt="scispacy"></img>
            <img src={ScispacyDemo} alt="scispacy entities"></img>
            <img src={ScispacyLinking} alt="scispacy linking"></img>
          </Carousel>
        </Col>
      </Row>

      <Padding/>    
      <Row gutter={16} justify="start" align="middle">
        <Col {...leftColumnProps}>
          <Typography.Title>
            Autocat
          </Typography.Title>
          <Typography.Paragraph strong>
           Autocat is a small web app for thinking about how we train text classification 
           models (and maybe in the future, general machine learning models), what their 
           failure modes are, and how we interact with models that we train.
          </Typography.Paragraph>
          <Button type="primary" href="https://autocat.apps.allenai.org" target="_blank">
            Train a Classifier
          </Button>
        </Col>
        <Col {...rightColumnProps}>
          <Carousel autoplay speed={300} effect="fade" dots={false}>
            <img src={AutocatWebsite} alt="autocat display"></img>
            <img src={AutocatResult} alt="autocat example interaction"></img>
          </Carousel>
        </Col>
      </Row>

      <Padding/>    
      <Row gutter={16} justify="start" align="middle">
        <Col {...leftColumnProps}>
          <Typography.Title>
            PAWLS
          </Typography.Title>
          <Typography.Paragraph strong>
            PAWLS (PDF Annotation With Labels and Structure) is a 'PDF Native' annotation interface
            which allows annotators to draw bounding boxes directly on top of a pdf canvas. PAWLS is
            an experiment to see what happens if annotators see source text in it's original context.
          </Typography.Paragraph>
          <Button type="primary" href="https://pawls.apps.allenai.org/" target="_blank">
            Demo
          </Button>
          <Button type="primary" href="https://arxiv.org/abs/2101.10281" target="_blank">
            Paper
          </Button>
          <Button type="primary" href="https://github.com/allenai/pawls" target="_blank">
            Code
          </Button>
        </Col>
        <Col {...rightColumnProps}>
          <Carousel autoplay speed={300} effect="fade" dots={false}>
            <img src={PawlsInterface} alt="pawls annotation interface"></img>
            <img src={PawlsRelations} alt="pawls relation annotation"></img>
          </Carousel>
        </Col>
      </Row>

      <Padding/>    
      <Row gutter={16} justify="start" align="middle">
        <Col {...leftColumnProps}>
          <Typography.Title>
            Save the NHS
          </Typography.Title>
          <Typography.Paragraph strong>
            Save the NHS is a visual essay describing the impact of underfunding 
            the National Health Service in the UK.
          </Typography.Paragraph>
          <Button type="primary" href="http://markneumann.xyz/visualessays/savethenhs/" target="_blank">
            Read more
          </Button>
        </Col>
        <Col {...rightColumnProps}>
          <Carousel autoplay speed={300} effect="fade">
            <img src={Nhs0} alt="save the nhs blog"></img>
            <img src={Nhs1} alt="save the nhs example"></img>
          </Carousel>
        </Col>
      </Row>

      <SmallPadding/>    
      <Row gutter={16} justify="start" align="middle">
        <Col {...titleColumnProps}>
        <Typography.Title level={4}>
          Mark Neumann 
        </Typography.Title>
        </Col>
      </Row>
      <Row gutter={16} justify="start" align="middle">
        <Col {...titleColumnProps}>
        <Typography.Title level={4}>
          <a href="mailto:mark.neumann.1992@gmail.com" target="_top" rel="noopener noreferrer">Email. </a>
          <a href="https://twitter.com/MarkNeumannnn" target="_blank" rel="noopener noreferrer"> Twitter. </a>
          <a href="https://github.com/DeNeutoy" target="_blank" rel="noopener noreferrer"> Github. </a>
          <a href="http://markneumann.xyz/blog" target="_blank" rel="noopener noreferrer"> Blog. </a>
          <a href="./cv.pdf" download> CV. </a>
        </Typography.Title>
        </Col>
      </Row>
    <SmallPadding/>

    </Centered>
    </React.Fragment>
  );
}

export default App;
