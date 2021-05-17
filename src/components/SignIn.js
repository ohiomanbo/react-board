import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';

function SignIn({onSubmit, onEmailChange, onPasswordChange, disableSubmitButton, showEmailText, showPasswordText, isLoading}) {
    return  (       
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>이메일 주소</Form.Label>
                    <Form.Control name="email" type="email" placeholder="예) abc@abc.co.kr" onChange={onEmailChange}/>       
                    { showEmailText && <Form.Text className="text-under-email-form">
                        이메일 주소를 정확히 입력해주세요.
                    </Form.Text>}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" onChange={onPasswordChange}/>    
                    { showPasswordText && <Form.Text className="text-under-password-form">
                        영문, 숫자, 특수문자를 조합하여 입력해주세요. (8-16자)
                    </Form.Text>}            
                </Form.Group>
                <Button variant="primary" type="submit" disabled={disableSubmitButton}>
                    Submit
                </Button>
            </Form> 
            {isLoading && <Spinner animation="border" variant="primary" />}       
        </div>
        );
}

export default SignIn;