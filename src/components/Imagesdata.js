import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

function Imagesdata({items}) {
  return (
    <Container>
                <div className='my-5 d-flex justify-content-around  row       '>
                    {
                        items.map((elem,index) => {
                            let {image,name,category,price,description} = elem;
                            return (
                               

                                        <Card style={{ width:"25rem" }} key={index} className="shadow p-3 my-4">
                                            <div className='d-flex'>

                                                <Card.Img className='all_images' variant="top" src={image} />


                                                <Card.Body >
                                                    <Card.Title className='text-data'>{name}</Card.Title>
                                                    <Card.Text className='text-data'>
                                                        {description}
                                                    </Card.Text>
                                                    <div className='d-flex justify-content-between align-items-center'>

                                                        <h6>Price : {price}</h6>
                                                        <Button variant="success">Buy</Button>
                                                    </div>
                                                </Card.Body>
                                            </div>
                                        </Card>
                               
                            )
                        })
                    }
                </div>
            </Container>

  )
}

export default Imagesdata