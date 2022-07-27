import PropTypes from 'prop-types';
import {SectionTitle} from './Section.styled'

export const Section = ({ title, children }) => {
    return (
        <>
            <SectionTitle>{title}</SectionTitle>
            <ul>
             {children}
            </ul>
         </>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}