import React from 'react'
import NavBar from "../Layout/Navbar";
import SubNav from '../Layout/SubNav';
import BlocklyComponent, { Block, Value, Field, Shadow } from '../Blockly';
import HomeImage from "./HomeImage";
import '../blocks/customblocks';
import '../generator/generator';

function Home() {
  return (
    <div className="App">
        <NavBar/>
        <SubNav/>
        
        <header>
        <BlocklyComponent readOnly={false}
                            trashcan={true} media={'media/'}
                            move={{
                              scrollbars: true,
                              drag: true,
                              wheel: true
                            }}
                            initialXml={`
                            <xml xmlns="http://www.w3.org/1999/xhtml">
                            <block type="controls_ifelse" x="0" y="0"></block>
                            </xml>
                            `}>
            <Block type="test_react_field" />
            <Block type="test_react_date_field" />
            <Block type="controls_ifelse" />
            <Block type="logic_compare" />
            <Block type="logic_operation" />
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="logic_operation" />
            <Block type="logic_negate" />
            <Block type="logic_boolean" />
            <Block type="logic_null" disabled="true" />
            <Block type="logic_ternary" />
            <Block type="text_charAt">
              <Value name="VALUE">
                <Block type="variables_get">
                  <Field name="VAR">text</Field>
                </Block>
              </Value>
            </Block>
          </BlocklyComponent>
        </header>
        <div className='container-2'>
          <HomeImage />
        </div>
        <div className='container-3'>
          <label htmlFor="text" className='input-label'>
            Sprite :
            <input type="text" className='input-container2' placeholder='Name' />
          </label>
          <label htmlFor="number" className='input-label'>
            <img className='axis-icon' src="https://pictobloxonline-e872.kxcdn.com/static/assets/38a70367a21e2f1fb15aa59b7d367450.svg" alt="" />
            <input placeholder='x' type="text" className='x-container' />
          </label>
          <label htmlFor="number" className='input-label'>
            <img className='axis-icon' src="https://pictobloxonline-e872.kxcdn.com/static/assets/9ddae4f6c1aeaf0784007203d9d4ac9c.svg" alt="" />
              <input placeholder='y' type="text" className='y-container' />
          </label>
          <div>
          <label htmlFor="number" className='input-label'>
              Size :
              <input placeholder='100' type="text" className='y-container' />
          </label>
          <label htmlFor="number" className='input-label'>
              Direction :
              <input placeholder='90' type="text" className='y-container' />
          </label>
          </div>
        </div>
        <div className='container-3'>
          
        </div>
        
      </div>
  )
}

export default Home;