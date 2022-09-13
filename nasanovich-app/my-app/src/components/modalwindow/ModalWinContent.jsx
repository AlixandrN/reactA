import React from 'react'
import s from './ModalWinContent.module.css'


function ModalWinContent(props) {
    
    
    
        return (
            <div className={s.mwcontent} >
                Movie information:
                <br/>
                name: {props.film['Title']}
                <br/>
                year: {props.film['Year']}
                <br/>
                type: {props.film['Type']}
                <br/>
                <img src= {props.film['Poster']} />
             
        
        
            </div>
          )
    

}

export default ModalWinContent