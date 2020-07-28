import React from 'react';

import './style.css';

import logoImg from '../../assets/logo.svg';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi'

export default function NewIncident(){
    return(
        <div className='new-incident-container'>
            <div className="content">
                <section>
                    <img src={logoImg} alt=""/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontar um herói para resolver isso.</p>
                    <Link className='back-link' to='/'>
                        < FiArrowLeft size={16} color='#E02041'/>
                        Voltar para home
                    </Link>                
                </section>
                <form action="">
                    <input placeholder='Título do caso'/>
                    <input type="email" placeholder='E-mail'/>
                    <input placeholder='Whatsapp'/>
                    <div className="input-group">
                        <input placeholder='Cidade'/>
                        <input placeholder='UF' style={{ width: 80 }}/>
                    </div>
                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}