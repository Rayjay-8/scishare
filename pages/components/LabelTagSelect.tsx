import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import styled from 'styled-components';
import React, { useState } from 'react';


import lala from '../../styles/LabelTags.module.scss'




export default class LabelSelect extends React.Component{
    state = {
    	opcoes: [
      	{ name: "Rascunho" },
        { name: "Tag" },
        { name: "Tag2" },
        { name: "Tag3" },
        { name: "Tag4" },
        { name: "Tag5" },
        { name: "Tag6" },
      ],
      activeIndex: 0,
    }

render() {
   const { opcoes, activeIndex } = this.state;

    return (
        <>
        <ConteinerStyle>
        
            {opcoes.map((u, i) =>
            
            <TagsStyle 
              className={i === activeIndex ? lala.active : ''}
              onClick={() => this.setState({ activeIndex: i })}
              key={u.name}>
               {u.name}</TagsStyle>
   
            // <TagsStyle color="#60409e" key='number'>{number}</TagsStyle>
       
                
            )}
        </ConteinerStyle>
        </>
    )

            }
}

const ConteinerStyle = styled.div`
    margin-top: 8px;
  border: 2px solid #444444;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
`;

const TagsStyle = styled.div`
    padding: 8px;
    margin: 2px;
    border-radius: 8px;
    cursor: pointer;



`;

