import Card from 'react-bootstrap/Card';
import img from "./media/logo.png"
import CardGroup from 'react-bootstrap/CardGroup';
import './NewCard.css'


function NewsCard() {
  return (
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>title</Card.Title>
              <Card.Text>
                hehe just kidding
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            
          </Card>
          
        </CardGroup>
  );
}

export default NewsCard;