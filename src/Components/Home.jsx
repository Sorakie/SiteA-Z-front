import React, { Component } from 'react';
import Axios from 'axios';
import { API_BASE_URL } from '../Constant.js';
import history from '../History.js';

export default class Home extends Component {
    constructor (props) {
        super (props);
        this.state = {
            email: "",
            prenom: "",
            nom:"",
            age: undefined,
            upPrenom: "",
            upNom: "",
            upAge: "",
        };
        this.HandleChange = this.HandleChange.bind(this);
        this.SubmitChange = this.SubmitChange.bind(this);
        this.DeleteAccount = this.DeleteAccount.bind(this);
    }

    HandleChange (e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    }

    componentDidMount () {
        const token = localStorage.getItem("token");

        Axios.get(API_BASE_URL + '/api/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((res) => {
            console.log(res);
            this.setState({
                prenom: res.data.firstname,
                nom: res.data.lastname,
                age: res.data.age,
            });
        })
        .catch((err) => {
            console.log(err);
            history.push('/');
        })
    }

    Deconnexion () {
        localStorage.removeItem("token");
        history.push('/');
    }

    SubmitChange (e) {
        e.preventDefault();
        const token = localStorage.getItem("token");
        Axios.post(API_BASE_URL + '/api/update', {
            firstname: this.state.upPrenom,
            lastname: this.state.upNom,
            age: this.state.upAge,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((res) => {
            console.log(res);
            this.setState({
                prenom: this.state.upPrenom,
                nom: this.state.upNom,
                age: this.state.upAge
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    DeleteAccount () {
        if(window.confirm("Voulez vous vraiment supprimer votre compte ?")) {
            const token = localStorage.getItem("token");

            Axios.post(API_BASE_URL + '/api/delete', {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then ((res) => {
                localStorage.removeItem("token");
                history.push("/");
            })
            .catch(err => {console.log(err)});
        }
    }

    render () {
        return (
            <div>
                <h1> {this.state.prenom} {this.state.nom} </h1>
                <button type="button" onClick={this.Deconnexion}> Se déconnecter</button>

                <form onSubmit={this.SubmitChange}>
                    <input type="text" value={this.state.upPrenom} onChange={this.HandleChange} name="upPrenom" placeholder="Prénom" required/>
                    <input type="text" value={this.state.upNom} onChange={this.HandleChange} name="upNom" placeholder="nom" required/>
                    <input type="number" min="0" value={this.state.upAge} onChange={this.HandleChange} name="upAge" placeholder="age" required/>
                    <button type="submit"> Modifier </button>
                </form>

                <button type="button" onClick={this.DeleteAccount}> Supprimer son Compte</button>
            </div>
        )
    }
}