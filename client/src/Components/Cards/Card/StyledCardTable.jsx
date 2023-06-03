import styled from "styled-components";

export const CardWrapper = styled.div`
box-sizing: border-box;
width: 100%;
height: 186px;

border-radius: 8px;
margin-bottom: 36px;
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: darkorange;

`
export const ImgWrapp = styled.div`
    
    img {
        width: 200px;
        height: 174px;
    }
`
export const DeviceDescription = styled.div`
width: 600px;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between; 
margin-left:20px
`
export const Color = styled.span`

font-size: ${props => props.fontSize};
`
export const Art = styled.span`
font-size: ${props => props.fontSize};

`
export const Price = styled.div`
font-size: ${props => props.fontSize};
color:white;
`
export const Description = styled.div`

color:white;
font-weight:bold;
font-size: ${props => props.fontSize};

`
export const PriceWrapp = styled.div`
display: flex;
justify-content: space-between; 
align-items: center;
gap:10px;
margin-right: 20px;
`
export const DescriptionWrapper = styled(DeviceDescription)`
width: 100%;
    flex-direction: row;
    align-items: center;
    margin-right:100px;

`
export const Footer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:40px
`
