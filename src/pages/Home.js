import React from 'react';
import News from '../components/News';
import Logo from '../images/DaydreamFX.png'

const Home = () => {
  return (
    <div>
        <img src={Logo} alt={"Logo"} />
        <br/>
        <News />
    </div>
  )
}

const styles = {
  container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "10px",
  },
  articleContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
  },
  img: {
      justifyContent: "center",
      width: "400px",
      height: "300px",
  },
  btn: {
      textAlign: "center",
      paddingTop: '5px'
  }
};

export default Home;