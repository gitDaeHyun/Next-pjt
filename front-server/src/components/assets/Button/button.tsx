import StyledButton from './buttonStyle'

const ButtonComponent : React.FC<any> = (props) => {
    return (
        <StyledButton {...props}>
           
            {props.children}  Button
        </StyledButton>
    )
}


export default ButtonComponent