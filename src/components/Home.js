import React from 'react';
import Section from './Section';
import styled from "styled-components";



function Home() {
  return (
    <Container>
        <Section 
            title = "Model S"
            description = "Order Online for Touchless Delivery"
            leftBtnText = "CUSTOM ORDER"
            rightBtnText = "EXISTING INVENTORY"
            backgroundImage = "/images/model-s.jpg"
        />
        <Section 
            title = "Model Y"
            description = "Order Online for Touchless Delivery"
            leftBtnText = "CUSTOM ORDER"
            rightBtnText = "EXISTING INVENTORY"
            backgroundImage = "/images/model-y.jpg"
        />
        <Section 
            title = "Model X"
            description = "Order Online for Touchless Delivery"
            leftBtnText = "CUSTOM ORDER"
            rightBtnText = "EXISTING INVENTORY"
            backgroundImage = "/images/model-x.jpg"
        />
        <Section 
            title = "Model 3"
            description = "Order Online for Touchless Delivery"
            leftBtnText = "CUSTOM ORDER"
            rightBtnText = "EXISTING INVENTORY"
            backgroundImage = "/images/model-3.jpg"
        />
        <Section 
            title = "Solar Panels"
            description = "Lowest Cost Solar Panels in India"
            leftBtnText = "ORDER NOW"
            rightBtnText = "LEARN MORE"
            backgroundImage = "/images/solar-panel.jpg"
        />
        <Section 
            title = "Solar Roof"
            description = "Produce Clean Energy From Your Roof"
            leftBtnText = "ORDER NOW"
            rightBtnText = "LEARN MORE"
            backgroundImage = "/images/solar-roof.jpg"
        />
        <Section 
            title = "Accessories"
            leftBtnText = "SHOP NOW"
            backgroundImage = "/images/accessories.jpg"
        />
        
    </Container>
  )
}

export default Home;

const Container = styled.div`
    height : 100vh;
    ${'' /* width : 100vh; */}
`