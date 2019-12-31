import React from 'react';
import {Col, Row, Typography, Button, BackTop, Icon, Carousel} from "antd";
import styled from "styled-components";

import ScispacyLogo from "./img/scispacy-logo.png";
import ScispacyDemo from "./img/scispacyDemo.png";
import ScispacyLinking from "./img/scispacyLinking.png";

import AllennlpWebsite from "./img/allennlpWebsite.png";
import SrlExample from "./img/srl.gif";

import ElmoResults from "./img/elmoResults.png";
import ElmoImage from "./img/elmoImage.png";

import AutocatWebsite from "./img/autocat.png";
import AutocatExample from "./img/autocat.gif";

import Nhs0 from "./img/nhs0.png";
import Nhs1 from "./img/nhs1.png";


const BigTitle = styled.h1`
font-size: 6rem;
padding-top: 100px;
font-weight: bold;
`;

const Padding = styled.h1`
padding: 120px;
`;
const SmallPadding = styled.h1`
padding: 60px;
`;

const Centered = styled.div`
    padding-left: 120px;
    padding-right: 120px;
    margin: 0 auto;
    min-height: 700px;
`;

const App: React.FC = () => {
  return (
    <React.Fragment>
      <BackTop>
      <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>
        <Icon type="caret-up" style={{ fontSize: '60px'}}/>
      </strong>
      </BackTop>

      <Centered>
      <Row gutter={16}>
        <Col span={18}>
          <BigTitle>
            Mark Neumann.
          </BigTitle>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
        <Typography.Title type="secondary" level={3}>
          I'm a Senior Research Engineer at the 
          <a href="https://allenai.org/" target="_blank" rel="noopener noreferrer"> Allen Institute for Artificial Intelligence. </a>
          I co-created and maintain
          <a href="https://allennlp.org/" target="_blank" rel="noopener noreferrer"> AllenNLP</a>
          , a library for Natural Language Processing research, focused on neural networks.
          I'm interested in NLP systems that work in real life.
        </Typography.Title>

        <Typography.Title level={4}>
          <a href="mailto:mark.neumann.1992@gmail.com" target="_top" rel="noopener noreferrer">Email. </a>
          <a href="https://twitter.com/MarkNeumannnn" target="_blank" rel="noopener noreferrer"> Twitter. </a>
          <a href="https://github.com/DeNeutoy" target="_blank" rel="noopener noreferrer"> Github. </a>
          <a href="./cv.pdf" download> CV. </a>
        </Typography.Title>
        </Col>
      </Row>


      <Padding/>    
      <SmallPadding/>    
      <Row gutter={16} type="flex" justify="start" align="middle">
        <Col span={6}>
          <Typography.Title>
            AllenNLP
          </Typography.Title>
          <Typography.Paragraph strong>
           AllenNLP is an open-source NLP research library, built on PyTorch.
           <ul>
            <li>Abstrations for Deep Learning + NLP</li>
            <li>Declarative JSON configuration files for reproducible experiments</li>
           </ul>
          </Typography.Paragraph>
          <Button type="primary" href="https://allennlp.org" target="_blank">
            Install the library
          </Button>
        </Col>
        <Col offset={2} span={14}>
          <Carousel autoplay speed={300} effect="fade" dots={false}>
            <img src={AllennlpWebsite} alt="allennlp logo" width={800}></img>
            <img src={SrlExample} alt="allennlp logo" width={800}></img>
          </Carousel>
        </Col>
      </Row>

      <Padding/>    
      <Row gutter={16} type="flex" justify="start" align="middle">
        <Col span={6}>
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
        <Col offset={2} span={14}>
          <Carousel autoplay speed={300} effect="fade" dots={false}>
            <img src={ElmoImage} alt="elmo" width={800}></img>
            <img src={ElmoResults} alt="elmo results" width={800}></img>
          </Carousel>
        </Col>
      </Row>

      <Padding/>    
      <Row gutter={16} type="flex" justify="start" align="middle">
        <Col span={6}>
          <Typography.Title>
            SciSpaCy
          </Typography.Title>
          <Typography.Paragraph strong>
           ScispaCy is a Spacy pipeline for processing English Biomedical text.

           <ul>
            <li>Custom Tokenisation, POS Tagging, NER, Entity Linking and Parsing</li>
            <li>Open source</li>
            <li>Easy to use public demo</li>
           </ul>
          </Typography.Paragraph>
          <Button type="primary" href="https://allenai.github.io/scispacy/" target="_blank">
            Install the library
          </Button>
        </Col>
        <Col offset={2} span={14}>
          <Carousel autoplay speed={300} effect="fade" dots={false}>
            <img src={ScispacyLogo} alt="scispacy"></img>
            <img src={ScispacyDemo} alt="scispacy entities"></img>
            <img src={ScispacyLinking} alt="scispacy linking"></img>
          </Carousel>
        </Col>
      </Row>

      <Padding/>    
      <Row gutter={16} type="flex" justify="start" align="middle">
        <Col span={6}>
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
        <Col offset={2} span={14}>
          <Carousel autoplay speed={300} effect="fade" dots={false}>
            <img src={AutocatWebsite} alt="autocat display"></img>
            <img src={AutocatExample} alt="autocat example interaction"></img>
          </Carousel>
        </Col>
      </Row>

      <Padding/>    
      <Row gutter={16} type="flex" justify="start" align="middle">
        <Col span={6}>
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
        <Col offset={2} span={14}>
          <Carousel autoplay speed={300} effect="fade">
            <img src={Nhs0} alt="save the nhs blog"></img>
            <img src={Nhs1} alt="save the nhs example"></img>
          </Carousel>
        </Col>
      </Row>



      <SmallPadding/>    
      <Row gutter={16}>
        <Col span={4}>
        <Typography.Title level={4}>
          Mark Neumann 
        </Typography.Title>
        </Col>
        <Col span={6}>
        <Typography.Title level={4}>
          <a href="mailto:mark.neumann.1992@gmail.com" target="_top" rel="noopener noreferrer">Email. </a>
          <a href="https://twitter.com/MarkNeumannnn" target="_blank" rel="noopener noreferrer"> Twitter. </a>
          <a href="https://github.com/DeNeutoy" target="_blank" rel="noopener noreferrer"> Github. </a>
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
