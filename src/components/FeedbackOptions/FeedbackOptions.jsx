import {List} from './FeedbackOptions.styled'
import PropTypes from 'prop-types';


export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
    
    return (
     
       <List>
                {Object.entries(option).map(el => {
                  return (
                        <li key={el[0]}><button type="button" onClick={()=>onLeaveFeedback(el[0])}>{(el[0])}</button></li>
                    )
                })}
                  
                    
            </List>
           
    )
}

FeedbackOptions.propTypes = {
    option: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}