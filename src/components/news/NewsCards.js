import Card from 'react-bootstrap/Card';
import img from "./media/logo.png"
import CardGroup from 'react-bootstrap/CardGroup';
//import './NewCard.css'
import news from "../mockData/tableMock.json"



function NewsCard() {
  const stl = {
    div: {
    marginBottom: "10px",
    margin: "20px",
    maxWidth:"300px",
    //display: "flex",
    gap: "5rem",
    flexDirection: 'auto',
    justifyContent: "space-between",
    display: "inline-block",
    flexWrap: "wrap",
    },
     card: {
      marginBottom: "10px",
      marginLeft: "20px",
      maxWidth: "auto",
      display: "flex",
      gap: "3rem",
      flexDirection: 'auto',
      justifyContent: "spaceBetween",
      display: "flex",
      flexWrap: "wrap",
  }

  }

  const displayNews = news.map((infoNews)=>{
  return (

        <CardGroup style={stl.div}>
          <Card style={stl.card}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{infoNews.title}</Card.Title>
              <Card.Text>
              {infoNews.content}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{infoNews.updated_at}</small>
            </Card.Footer>
          </Card>
    
        </CardGroup>
  );
})
return(
  
  <CardGroup>
    
    <Card style={stl.card}>
    <div style={stl.div}>
    {displayNews}
    </div>
  </Card>
  
  </CardGroup>
 
)

}

export default NewsCard;

