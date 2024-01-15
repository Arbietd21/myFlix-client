import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const ProfileView = () => {

    const storedUser = JSON.parse(localStorage.getItem('user'));
    const [username, setUsername] = useState(storedUser.username);
    const [password, setPassword] = useState(storedUser.password);
    const [birthday, setBirthday] = useState(storedUser.birthday);
    const [email, setEmail] = useState(storedUser.email);
    const [favorite, setFavorite] = useState(storedUser.favorites);





}