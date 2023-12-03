
import React, { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import * as styles from './loginpage.styles';
import Typography from '@mui/material/Typography'
import Button from '../../common/button/Button';
interface LoginPageProps  {}
import { ButtonColor, ButtonSize, ButtonTextColor, ButtonVariant } from '../../common/button/types';
import userAPI from '../../API/userAPI';
import { useDispatch, useSelector } from 'react-redux';
import {setUserId } from '../../store/userSlice.js';
import Input from '../../common/input/Input';
import { Link } from 'react-router-dom';

const LoginPageProps: FC<LoginPageProps> = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    const dispatch = useDispatch();
    const [userId, setInnerUserId] = useState(useSelector((state) => state.user.userId));


    useEffect(() => {
        if (buttonClicked) {
            const fetchData = async () => {
                const response = await userAPI.login(login, password);
                const data = response.data;
                return data;
            }
            fetchData().then((id) => {
                dispatch(setUserId(id));
                setUserId(userAPI.login(login, password));
                setInnerUserId(id);
                setButtonClicked(false);
            })
        }
    }, [buttonClicked, login, password, dispatch, userId]);

    const handleLoginInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return (
        <Box sx={styles.loginPageContainer()}>
            <Box sx={styles.loginPage()}>
                <Box sx={styles.loginPageInner()}>
                    <h1> { `${userId??""} `} </h1>
                    <Typography 
                        variant='h3Medium'
                        sx={{marginBottom: '35px'}}
                    > Sign In </Typography>
                    <Input
                        sx={{marginBottom: '15px'}}
                        onChange={handleLoginInputChange}
                        textLabel='Login'
                        textPlaceholder='cooluser'
                    />
                    <Input
                    sx={{marginBottom: '15px'}}
                        onChange={handlePasswordInputChange}
                        textLabel='Password'
                        textPlaceholder='coolPassword'
                        type='password'
                    />
                    <Link to='/register'>
                        <Typography variant='pRegular' sx={styles.registerlink()}> Create Account </Typography>
                    </Link>
                    <Button
                        onClick={() => setButtonClicked(true)}
                        sx={{marginTop: '15px'}}
                        text="Submit"
                        color={ButtonColor.DARK}
                        textColor={ButtonTextColor.LIGHT}
                        variant={ButtonVariant.OUTLINED}
                        size={ButtonSize.MEDIUM}
                    ></Button>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPageProps;