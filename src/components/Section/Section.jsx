import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
    return (
        <>
            <h2>{title}</h2>
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