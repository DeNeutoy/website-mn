import React from 'react';
import {Col, Row, Typography, Button, BackTop, Icon, Carousel} from "antd";
import styled from "styled-components";

import ScispacyLogo from "./scispacy-logo.png";
import AllennlpLogo from "./allennlp-logo-dark.png";

const BigTitle = styled.h1`
font-size: 6rem;
padding-top: 100px;
font-weight: bold;
`;
const Padding = styled.h1`
padding: 100px;
`;


const Centered = styled.div`
    padding-left: 100px;
    padding-right: 100px;
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
          , a library for research in deep learning for NLP.
          I like NLP systems that actually work in real life.
        </Typography.Title>

        <Typography.Title level={4}>
          <a href="mailto:mark.neumann.1992@gmail.com" target="_top" rel="noopener noreferrer">Email. </a>
          <a href="https://twitter.com/MarkNeumannnn" target="_blank" rel="noopener noreferrer"> Twitter. </a>
          <a href="https://github.com/DeNeutoy" target="_blank" rel="noopener noreferrer"> Github. </a>
        </Typography.Title>
        </Col>
      </Row>


      <Padding/>    
      <Row gutter={16}>
        <Col span={8}>
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
        <Col span={12}>
          <img src={AllennlpLogo} alt="allennlp logo" width={800}></img>
        </Col>
      </Row>

      <Padding/>    
      <Row gutter={16}>
        <Col span={8}>
          <Typography.Title>
            Elmo
          </Typography.Title>
          <Typography.Paragraph strong>
            Elmo (Embeddings from Language Models) is a popular method for embedding words in context.
            It began a trend of deep contextualised word representation learning in NLP, such as BERT.

          </Typography.Paragraph>
          <Button type="primary" href="https://allenai.github.io/scispacy/" target="_blank">
            Read the paper
          </Button>
        </Col>
        <Col span={12}>
        </Col>
      </Row>

      <Padding/>    
      <Row gutter={16}>
        <Col span={8}>
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
        <Col span={12}>
          <Carousel autoplay>
            <img src={ScispacyLogo} alt="hi"></img>
            <img src={ScispacyLogo} alt="hi"></img>
          </Carousel>
        </Col>
      </Row>
      <Padding/>    

    </Centered>
    </React.Fragment>
  );
}

export default App;
