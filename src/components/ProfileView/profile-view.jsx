import { useState } from 'react';
import { Form, Button, Card, Container, Col } from 'react-bootstrap';

export const ProfileView = () => {

    const token = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const [username, setUsername] = useState(storedUser.username);
    const [password, setPassword] = useState(storedUser.password);
    const [birthday, setBirthday] = useState(storedUser.birthday);
    const [email, setEmail] = useState(storedUser.email);

    const updateUser = () => {

        const updatedUser = {
            username: username,
            password: password,
            email: email,
            birthday: birthday
        };

        console.log(`Updated user:`, updatedUser);

        fetch(`https://movie-flix-api-ca627b5a7961.herokuapp.com/users/${storedUser.username}`, {
            method: "PUT",
            headers: { Authorization: `Bearer ${token}` },
            body: JSON.stringify(updatedUser)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                    console.log(updatedUser);
                }
            })
            .then(data => {
                console.log(`Successfully updated!`, data);
            })
            .catch((e) => {
                alert("Something went wrong =(");
            });
    };

    return (
        <>
            <Container>
                {storedUser.favorites.map((movie) => (
                    console.log(movie)
                    // <Col key={movie.id} >
                    //     <Card.Img src={movie.image} />
                    //     <Card.Body>
                    //         <Card.Title>{movie.title}</Card.Title>
                    //         <Card.Text>Director: {movie.director.name}</Card.Text>
                    //     </Card.Body>
                    // </Col>
                ))}
            </Container>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control
                            type="birthdate"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={updateUser}>Update</Button>
                </Form>
            </Container>
        </>
    )
}