import {List, Item, Button} from './FeedbackOptions.styled'
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";


export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
    
    return (
     
       <List>
                {Object.entries(option).map(el => {
                  return (
                        <Item key={nanoid()}><Button type="button" onClick={()=>onLeaveFeedback(el[0])}>{(el[0])}</Button></Item>
                    )
                })}
                  
                    
            </List>
           
    )
}

FeedbackOptions.propTypes = {
    option: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}