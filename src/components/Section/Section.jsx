import {TitleText} from './Title.styled';

const Section = ({title = ' ', children}) => (
    <>
        <TitleText>{title}</TitleText>
        {children}
    </>
    
)

export default Section;