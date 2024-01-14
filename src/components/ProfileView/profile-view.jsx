import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const ProfileView = () => {

    const storedUser = JSON.parse(localStorage.getItem('user'));
    const [username, setUsername] = useState(storedUser.username)


}