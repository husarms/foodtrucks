import React, { PureComponent} from 'react';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons';
import SelectField from 'react-md/lib/SelectFields';
import ListItem from 'react-md/lib/Lists/ListItem';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Tabs from 'react-md/lib/Tabs/Tabs';
import Tab from 'react-md/lib/Tabs/Tab';
import TabsContainer from 'react-md/lib/Tabs/TabsContainer';
import CircularProgress from 'react-md/lib/Progress/CircularProgress'

import MapContainer from './MapContainer';
import TruckGallery from './TruckGallery';
import TruckDialog from './TruckDialog';


const nav = <Button key="nav" icon>menu</Button>;
const TITLES = ['All', 'Family', 'Friends', 'Coworkers'];
const titleMenu = (
    <SelectField
        key="titleMenu"
        id="titles"
        menuItems={TITLES}
        defaultValue={TITLES[0]}
    />
);

class App extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            trucks: [],
            truck: [],
            date: App.getTodaysDate(),
            showMap: false,
            showGallery: true,
            activeTabIndex: 0,
            tabTwoChildren: null
        }

        this._handleTabChange = this._handleTabChange.bind(this);
    }

    componentDidMount(){
        fetch('/api/trucks')
            .then(res => res.json())
            .then(trucks => this.setState({trucks}));
    }

    componentWillUnmount() {
        if (this._timeout) {
            clearTimeout(this._timeout);
        }
    }

    static getTodaysDate(){
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var today = new Date();
        var dd = today.getDate();
        var yyyy = today.getFullYear();
        var monthName = monthNames[today.getMonth()];

        if(dd<10) {
            dd = '0'+dd
        }

        today = monthName + ' ' + dd + ' ' + yyyy;
        return today;
    }

    handleSelectedTruckChange(truck){
        this.setState({
            truck: truck
        });
    }


    handleTodaysTruckClick(e){
        if(e){
            e.preventDefault();
        }
        this.setState({
            showMap: true,
            showGallery: false
        });
    }

    handleViewTrucksClick(e){
        if(e){
            e.preventDefault();
        }
        this.setState({
            showMap: false,
            showGallery: true
        });
    }

    _handleTabChange(activeTabIndex) {
        this.setState({ activeTabIndex });
    }

    handleDialogClick(e){
        if(e){
            e.preventDefault();
        }
        this.child._openDialog(e);
    }

    renderMapContainer(){
        return <div>
            <MapContainer
                trucks={this.state.trucks}
                truck={this.state.truck}
            />
        </div>;
    }

    renderTruckGallery(){
        return <div>
            <TruckGallery
                trucks={this.state.trucks}
            />
        </div>;
    }

    render() {

        const { activeTabIndex } = this.state;

        var actions = [];

        //Add selectable trucks drop down when map is rendered
        if(this.state.showMap){
            actions.push(
                <MenuButton
                    id="vert-menu"
                    icon
                    buttonChildren="more_vert"
                    className="menu-example"
                    tooltipLabel="Open some menu"
                >
                    {this.state.trucks.map(truck =>
                        <ListItem primaryText={truck.name} onClick={() => this.handleSelectedTruckChange(truck)}/>,
                    )}
                </MenuButton>);
        }

        return (
            <div>
                <Toolbar
                    themed
                    title="Food Trucks"
                    nav={nav}
                    actions={[
                        <Button key="favorite" icon onClick={() => this.handleTodaysTruckClick()}>favorite</Button>
                    ]}
                    titleMenu={titleMenu}
                />
                <TabsContainer onTabChange={this._handleTabChange} activeTabIndex={activeTabIndex} panelClassName="md-grid" colored>
                    <Tabs tabId="tab">
                        <Tab label="Tab One">
                            <h3 className="md-cell md-cell--12">Hello, World! Tab 1</h3>
                        </Tab>
                        <Tab label="Tab Two">
                            <h3 className="md-cell md-cell--12">Hello, World! Tab 2</h3>
                        </Tab>
                    </Tabs>
                </TabsContainer>
                <TruckDialog onRef={ref => (this.child = ref)}/>
                {
                    this.state.showMap &&
                    this.renderMapContainer()
                }
                {
                    this.state.showGallery &&
                    this.renderTruckGallery()
                }
            </div>
        );
    }
}

export default App
