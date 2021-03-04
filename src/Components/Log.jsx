import React, { Component } from 'react';
import Axios from 'axios';
import { API_BASE_URL } from '../Constant.js';
import history from '../History.js';


export default class Log extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: "",
            signupEmail: "",
            password: "",
            signupPassword: "",
            prenom: "",
            nom: "",
            age: 0,
            signup: false,
        };
        this.HandleChange = this.HandleChange.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.HandleConnexion = this.HandleConnexion.bind(this);
        this.Display = this.Display.bind(this);
    }

    HandleChange (e) {
        const { name , value } = e.target;

        this.setState({
            [name]: value,
        })
    }
    HandleSubmit (e) {
        e.preventDefault();
        Axios.post(API_BASE_URL + "/api/signup", {
            email: this.state.signupEmail,
            password: this.state.signupPassword,
            firstname: this.state.prenom,
            lastname: this.state.nom,
            age: this.state.age,
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    HandleConnexion (e) {
        e.preventDefault();
        Axios.post(API_BASE_URL + '/api/login', {
            email: this.state.email,
            password: this.state.password,
        })
        .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.data.token);
            history.push("/Home");
        })
        .catch(err => {
            console.log(err);
        })
    }

    Display () {
        if (this.state.signup) {
            return (
                <form onSubmit={this.HandleSubmit}>
                    <input type="text" value={this.state.signupEmail} onChange={this.HandleChange} name="signupEmail" required />
                    <input type="password" value={this.state.signupPassword} onChange={this.HandleChange} name="signupPassword" placeholder="Mot de passe" required/>
                    <input type="number" min="0" value={this.state.age} onChange={this.HandleChange} name="age" placeholder="age" required/>
                    <input type="text" value={this.state.prenom} onChange={this.HandleChange} name="prenom" placeholder="Prénom" required/>
                    <input type="text" value={this.state.nom} onChange={(e) => this.setState({nom: e.target.value})} name="nom" placeholder="nom" required/>
                    <button type="submit"> S'inscrire </button>
                    <button type="button" onClick={(e) => {this.setState({signup: !this.state.signup})}}> Se Connecter</button>
                </form>
            )
        } else {
            return (
                <form onSubmit={this.HandleConnexion}>
                    <input type="text" value={this.state.email} onChange={this.HandleChange} name="email" required />
                    <input type="password" value={this.state.password} onChange={this.HandleChange} name="password" placeholder="Mot de passe" required/>
                    <button type="submit"> Se Connecter </button>
                    <button type="button" onClick={(e) => {this.setState({signup: !this.state.signup})}}> S'Inscrire</button>
                </form>
            )
        }
        return null;
    }

    componentDidMount () {
        const token = localStorage.getItem("token");

        if (!token)
            return;
        Axios.get(API_BASE_URL + '/api/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((res) => {
            console.log(res);
            history.push("/Home");
        })
        .catch((err) => {
            console.log(err);
        })
    }


    render () {
        return (
            <div>
                {this.state.signup ?
                    <form onSubmit={this.HandleSubmit}>
                        <input type="text" value={this.state.signupEmail} onChange={this.HandleChange} name="signupEmail" required />
                        <input type="password" value={this.state.signupPassword} onChange={this.HandleChange} name="signupPassword" placeholder="Mot de passe" required/>
                        <input type="number" min="0" value={this.state.age} onChange={this.HandleChange} name="age" placeholder="age" required/>
                        <input type="text" value={this.state.prenom} onChange={this.HandleChange} name="prenom" placeholder="Prénom" required/>
                        <input type="text" value={this.state.nom} onChange={(e) => this.setState({nom: e.target.value})} name="nom" placeholder="nom" required/>
                        <button type="submit"> S'inscrire </button>
                        <button type="button" onClick={(e) => {this.setState({signup: !this.state.signup})}}> Se Connecter</button>
                    </form> :
                    <form onSubmit={this.HandleConnexion}>
                        <input type="text" value={this.state.email} onChange={this.HandleChange} name="email" required />
                        <input type="password" value={this.state.password} onChange={this.HandleChange} name="password" placeholder="Mot de passe" required/>
                        <button type="submit"> Se Connecter </button>
                        <button type="button" onClick={(e) => {this.setState({signup: !this.state.signup})}}> S'Inscrire</button>
                    </form>
                }
            </div>
        );
    }
}