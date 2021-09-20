import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import styled from 'styled-components';
import React, { useState } from 'react';




export default function LabelSelect({ Component, pageProps }){
    // const opcoes = [{'Tag':'Rascunho','Select':'True',show:'red'},{'Tag':'Leitura'}]
    const opcoes = ['Rascunho','Tag']

    
   
   const [count, setCount] = useState(10);

   const [ menuActive, setMenuState ] = useState(true);

    return (
        <>
        <ConteinerStyle>
        <p>You clicked {count} times</p>
            {opcoes.map((number) =>
            
            <TagsStyle className={`p-sidebar-menu-item ${menuActive ? "yellow" : ""}`} onClick={() => setMenuState((prevMenuActive) => !prevMenuActive)}  key='number'>{number}</TagsStyle>
   
            // <TagsStyle color="#60409e" key='number'>{number}</TagsStyle>
       
                
            )}
        </ConteinerStyle>
        </>
    )


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
    margin-right: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
    /* background-color: ${props => props.show ? '#EFEFEF' : '#60409e'}; */
    border-radius: 8px;
    cursor: pointer;
    /* background-color: ${props => props.show}; */


`;
