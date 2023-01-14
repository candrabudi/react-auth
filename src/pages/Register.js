import React, { useState } from 'react';

import { useHistory  } from 'react-router';

import axios from 'axios';

function Register() {

    const [name, setName]                                   = useState("");
    const [email, setEmail]                                 = useState("");
    const [password, setPassword]                           = useState("");
    const [passwordConfirmation, setPasswordConfirmation]   = useState("");

    const [validation, setValidation] = useState([]);

    const history = useHistory();

    const registerHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', passwordConfirmation);

        await axios.post('http://localhost:8000/api/register', formData)
        .then(() => {
            history.push('/');
        })
        .catch((error) => {
            setValidation(error.response.data.data);
        })
    };

    console.log(validation);


    return (
        <div className='container' style={{ marginTop: "120px" }}>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='card border-0 rounded shadow-sm'>
                        <div className='card-body'>
                            <h4 className='fw-bold'>
                                HALAMAN REGISTER
                            </h4>
                            <hr />

                            <form onSubmit={registerHandler}>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='mb-3'>
                                            <label className='form-label'>NAMA LENGKAP</label>
                                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Lengkap"/>
                                            {
                                                validation.name && (
                                                    <div className="alert alert-danger" style={{marginTop: "10px"}}>
                                                        {validation.name[0]}
                                                    </div> 
                                                )
                                                
                                            }
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='mb-3'>
                                            <label className='form-label'>EMAIL</label>
                                            <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Email"/>
                                            {
                                                validation.email && (
                                                    <div className="alert alert-danger" style={{marginTop: "10px"}}>
                                                        {validation.email[0]}
                                                    </div> 
                                                )
                                                
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">PASSWORD</label>
                                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
                                        </div>
                                        {
                                            validation.password && (
                                                <div className="alert alert-danger">
                                                    {validation.password[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">KONFIRMASI PASSWORD</label>
                                            <input type="password" className="form-control" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Masukkan Konfirmasi Password"/>
                                        </div>
                                    </div>
                                </div>
                                    <button type="submit" style={{width: "120px", marginLeft: "12px"}} className="btn btn-primary">REGISTER</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
    
}

export default Register;