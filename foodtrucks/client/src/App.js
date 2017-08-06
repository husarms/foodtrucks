import React, {Component} from 'react';
import './App.css';
import MapContainer from './MapContainer.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trucks: [],
            truck: []
        }
    }

    componentDidMount() {
        fetch('/api/trucks')
            .then(res => res.json())
            .then(trucks => this.setState({trucks}));

        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any nav burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(function ($el) {
                $el.addEventListener('click', function () {

                    // Get the target from the "data-target" attribute
                    var target = $el.dataset.target;
                    var $target = document.getElementById(target);

                    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                    $el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });
        }
    }

    handleSelectedTruckChange(truck){
        this.setState({
            truck: truck
        });
    }

    render() {
        var _this = this;
        return (
            <div>
                <nav className="navbar is-transparent">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">
                            <img src="/food-truck-hi.png" alt="Food Truck"></img>
                        </a>

                        <div className="navbar-burger burger" data-target="navMenuTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>


                    <div id="navMenuTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link " href="#">
                                    Food Trucks
                                </a>
                                <div id="blogDropdown" className="navbar-dropdown is-boxed" data-style="width: 18rem;">
                                {
                                    this.state.trucks.map(function(truck){
                                        return <a className="navbar-item" href="#" onClick={()=> _this.handleSelectedTruckChange(truck)}>
                                            <div className="navbar-content">
                                                <p>
                                                    <small className="has-text-info">03 Aug 2017</small>
                                                </p>
                                                <p>{truck.name + " @ " + truck.locationName}</p>
                                            </div>
                                        </a>
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div>
                    <MapContainer
                        trucks={this.state.trucks}
                        truck={this.state.truck}
                    />
                </div>
            </div>
        );
    }
}

export default App;