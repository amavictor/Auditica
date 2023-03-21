import styled from 'styled-components';

interface ButtonProps{
    spotify?: string
}
const ButtonContainer = styled.button<ButtonProps>`
    background-color: ${({ spotify }) => spotify ? "var(--spotify-green)" : "transparent"};
    color: ${({ spotify }) => spotify ? "var(--background-black)" : "white"};
    font-weight:${({spotify})=> spotify ? "500" : "500"};
    padding:${({ spotify }) => spotify ? "10px 20px;" : "0.7rem 0 0.7rem 0.7rem"};
    width: ${({spotify})=> spotify ? "auto" : "100%"};
    border-radius:${({spotify})=>spotify ? "30px" : "4px"} ;
    font-size:${({spotify})=>spotify ? "1.5rem" : "0.8rem"};
    transition: all 0.3s ease;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    gap:10px;
    
    &:hover{
        opacity:${({spotify})=>spotify ? "0.93" : "1"};
        cursor: pointer;
        padding:${({ spotify }) => spotify && "10px 30px"};
        background-color: var(--primary);
    }

`


export const Button = ({children,...otherProps}:any) => {
    return (
      
        <ButtonContainer
            {...otherProps}
        >{children}</ButtonContainer>
  )
}

