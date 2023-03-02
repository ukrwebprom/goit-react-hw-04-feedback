import PropTypes from "prop-types";
import {ButtonsList, Button} from './FeedbackOptions.styled';
import { BiLike, BiDislike } from 'react-icons/bi';
import { RiEmotionNormalLine } from 'react-icons/ri';


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    const icons = {
        Good: <BiLike />,
        Neutral: <RiEmotionNormalLine />,
        Bad: <BiDislike />,
    }
    return (
        <ButtonsList>
        {options.map(item => 
            <Button key={item} onClick={() => onLeaveFeedback(item)}>{icons[item]}{item}</Button>)
        
        }
        </ButtonsList>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
        

export default FeedbackOptions
